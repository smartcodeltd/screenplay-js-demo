import 'mocha';

import * as sinon from 'sinon';

import {
    ActivityBegins,
    ActivityDetails,
    ActivityFinished,
    ExecutionSuccessful,
    Name,
    Timestamp,
} from '../../../src/domain';
import { Actor, See } from '../../../src/screenplay';
import { Clock, StageManager } from '../../../src/stage';
import { expect } from '../../expect';
import { Recorder } from '../../Recorder';
import {
    AcousticGuitar,
    Chords,
    Guitar,
    MusicSheets,
    NumberOfGuitarStringsLeft,
    PlayAChord,
    PlayAGuitar,
    PlayASong,
} from '../example-implementation';

const equals = (expected: number) => (actual: PromiseLike<number>) => expect(actual).to.eventually.equal(expected);

describe('Actor', () => {

    let guitar: sinon.SinonStubbedInstance<Guitar>;
    beforeEach(() => {
        guitar = sinon.createStubInstance(AcousticGuitar);
    });

    it('can be identified by their name', () => {

        const actor = Actor.named('Chris');

        expect(actor.toString()).to.equal('Chris');
    });

    it('has Abilities allowing them to perform Activities and interact with a given Interface of the system under test', () =>

        Actor.named('Chris').whoCan(PlayAGuitar.suchAs(guitar)).attemptsTo(
            PlayAChord.of(Chords.AMajor),
        ).
        then(() => {
            expect(guitar.play).to.have.been.calledWith(Chords.AMajor);
        }));

    it('performs composite Tasks recursively to accomplish their Business Goals', () =>

        Actor.named('Chris').whoCan(PlayAGuitar.suchAs(guitar)).attemptsTo(
            PlayASong.from(MusicSheets.Wild_Thing),
        ).
        then(() => {
            expect(guitar.play.getCall(0)).to.have.been.calledWith(Chords.AMajor);
            expect(guitar.play.getCall(1)).to.have.been.calledWith(Chords.DMajor);
            expect(guitar.play.getCall(2)).to.have.been.calledWith(Chords.EMajor);
        }));

    describe('asks Questions about the state of the system', () => {
        it('fulfills the promise should the question be answered as expected', () => {
            guitar.availableStrings.returns(Promise.resolve(['E2', 'A2', 'D3', 'G3', 'B3', 'E4' ]));

            return expect(Actor.named('Chris').whoCan(PlayAGuitar.suchAs(guitar)).attemptsTo(
                PlayASong.from(MusicSheets.Wild_Thing),
                See.if(NumberOfGuitarStringsLeft(), equals(6)),
            )).to.be.fulfilled;
        });

        it('rejects the promise should the answer differ from what was expected', () => {
            const oneStringMissing = ['E2', 'A2', 'D3', 'G3', 'B3' ];
            guitar.availableStrings.returns(Promise.resolve(oneStringMissing));

            return expect(Actor.named('Chris').whoCan(PlayAGuitar.suchAs(guitar)).attemptsTo(
                PlayASong.from(MusicSheets.Wild_Thing),
                See.if(NumberOfGuitarStringsLeft(), equals(6)),
            )).to.be.rejectedWith('expected 5 to equal 6');
        });
    });

    it('admits if it does not have the Ability necessary to accomplish a given Interaction', () =>

        expect(Actor.named('Ben').attemptsTo(
            PlayAChord.of(Chords.AMajor),
        )).to.be.eventually.rejectedWith(`Ben can't PlayAGuitar yet. Did you give them the ability to do so?`));

    describe('DomainEvent handling', () => {

        let clock: sinon.SinonStubbedInstance<Clock>,
            stageManager: StageManager,
            recorder: Recorder,
            Bob: Actor;

        beforeEach(() => {
            clock = sinon.createStubInstance(Clock);
            clock.now.returns(new Timestamp(new Date('2018-06-10T22:57:07.112Z')));

            stageManager = new StageManager(clock);

            recorder = new Recorder();
            recorder.assignTo(stageManager);

            Bob = new Actor('Bob', stageManager, clock);
        });

        describe('notifies the StageManager of the activities it performs', () => {

            const details = new ActivityDetails(
                new Name('Bob plays the chord of A'),
            );

            it('notifies when an activity begins and ends', () => Bob.whoCan(PlayAGuitar.suchAs(guitar)).attemptsTo(
                PlayAChord.of(Chords.AMajor),
            ).
            then(() => {
                expect(recorder.events).to.have.lengthOf(2);

                expect(recorder.events[0]).to.equal(new ActivityBegins(details, clock.now()));

                expect(recorder.events[1]).to.equal(new ActivityFinished(details, new ExecutionSuccessful(), clock.now()));
            }));
        });

        it('reacts to events and changes its behaviour');
    });
});
