import GameStates from '../Enums/GameStates';
import StateMachine from 'javascript-state-machine';

export class GameState {
  constructor(initial) {
    new StateMachine({
      init: initial,
      transitions: [
        {name: 'accept', from: GameStates.pending, to: GameStates.accepted},
        {name: 'schedule', from: GameStates.pending, to: GameStates.scheduled},
        {name: 'start', from: [GameStates.scheduled, GameStates.accepted], to: GameStates.playing},
        {name: 'finish', from: GameStates.playing, to: GameStates.ended},
        {
          name: 'cancel',
          from: [GameStates.scheduled, GameStates.accepted, GameStates.pending],
          to: GameStates.cancelled
        },
      ],
      methods: {
        changeState: function (state) {

        }
      }
    });
  }
}
