'use strict'

import {GameState} from "./ValueObjects/GameState";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Game extends Model {

  static create(playerA, playerB, state) {
    let game = new this();

    game.playerA().save(playerA)
    game.playerB().save(playerB)
    game.setState(state);

    return game
  }

  static get computed() {
    return ['state']
  }

  setState(state) {
    if (!this.stateMachine) {
      this.stateMachine = new GameState(state)
    }

    if (!GameStates.enumValues().includes(state)) {
      throw new Error(`Game state ${state} is invalid`)
    }

    this.stateMachine.changeState(state);
    this.state = this.getState()
    return this.stateMachine.state
  }

  getState() {
    return this.stateMachine.state
  }

  playerA() {
    return this.hasOne('App/Models/Player', 'id', 'player_a_id');
  }

  playerB() {
    return this.hasOne('App/Models/Player', 'id', 'player_b_id');
  }
}

module.exports = Game
