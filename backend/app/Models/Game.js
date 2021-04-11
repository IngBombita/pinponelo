'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Game extends Model {

  playerA () {
    return this.hasOne('App/Models/Player', 'id', 'player_a_id');
  }
  playerB () {
    return this.hasOne('App/Models/Player', 'id', 'player_b_id');
  }
}

module.exports = Game
