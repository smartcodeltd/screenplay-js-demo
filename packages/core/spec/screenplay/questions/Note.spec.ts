import 'mocha';

import * as sinon from 'sinon';
import { LogicError } from '../../../src/errors';
import { CorrelationId } from '../../../src/model';
import { Ability, Actor, Log, Note, Question, TakeNotes } from '../../../src/screenplay';
import { Stage } from '../../../src/stage';
import { expect } from '../../expect';
import { EnsureSame } from '../EnsureSame';

describe('Note', () => {
    const
        expectedHobby = 'DYI',
        NameOfAHobby = () => Question.about(`the name of a hobby`, someActor => Promise.resolve(expectedHobby));

    const
        sceneId = new CorrelationId('some-scene-id'),
        activityId = new CorrelationId('some-activity-id');

    let stage: sinon.SinonStubbedInstance<Stage>,
        Noah: Actor;

    beforeEach(() => {
        stage = sinon.createStubInstance(Stage);

        stage.currentSceneId.returns(sceneId);
        stage.assignNewActivityId.returns(activityId);
        stage.currentActivityId.returns(activityId);

        Noah = new Actor('Noah', stage as unknown as Stage)
            .whoCan(TakeNotes.usingAnEmptyNotepad());
    });

    /**
     * @test {TakeNotes}
     * @test {Note}
     */
    it('enables the actor to recall the answer to a given question', () => {
        const notepad = new Map([ [NameOfAHobby().toString(), 'DYI'] ]);
        expect(actorWhoCan(new TakeNotes(notepad)).attemptsTo(
            EnsureSame(Note.of(NameOfAHobby()), 'DYI'),
        ));
    });

    /**
     * @test {TakeNotes}
     * @test {Note}
     */
    it('enables the actor to recall the answer on a given subject', () => {
        const notepad = new Map([ ['custom subject', 'DYI'] ]);
        expect(actorWhoCan(new TakeNotes(notepad)).attemptsTo(
            EnsureSame(Note.of('custom subject'), 'DYI'),
        ));
    });

    /**
     * @test {TakeNotes}
     * @test {Note}
     */
    it('complains if no answer to a given question has ever been remembered', () =>
        expect(actorWhoCan(TakeNotes.usingAnEmptyNotepad()).attemptsTo(
            Log.the(Note.of(NameOfAHobby())),
        )).to.be.rejectedWith(LogicError, 'The answer to "the name of a hobby" has never been recorded'));

    /**
     * @test {TakeNotes}
     * @test {Note}
     */
    it('complains if no answer on a given subject has ever been remembered', () =>
        expect(actorWhoCan(TakeNotes.usingAnEmptyNotepad()).attemptsTo(
            Log.the(Note.of('some subject')),
        )).to.be.rejectedWith(LogicError, 'The answer to "some subject" has never been recorded'));

    function actorWhoCan(...abilities: Ability[]): Actor {
        return new Actor('Noah', stage as unknown as Stage)
            .whoCan(...abilities);
    }
});
