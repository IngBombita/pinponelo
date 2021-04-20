'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Game extends Model {

  static create(playerA, playerB, state) {
    let game = new this();

    game.playerA().save(playerA)
    game.playerB().save(playerB)
    game.state = state

    return game
  }

  playerA() {
    return this.hasOne('App/Models/Player', 'id', 'player_a_id');
  }

  playerB() {
    return this.hasOne('App/Models/Player', 'id', 'player_b_id');
  }
}

module.exports = Game
