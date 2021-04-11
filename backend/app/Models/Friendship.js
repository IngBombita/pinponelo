'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Friendship extends Model {


  playerA() {
    return this.belongsTo('App/Models/Player', 'player_a_id', 'id')
  }

  playerB() {
    return this.belongsTo('App/Models/Player', 'player_b_id', 'id')
  }
}

module.exports = Friendship
