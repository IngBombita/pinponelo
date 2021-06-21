'use strict'

import FriendshipStates from "./Enums/FriendshipStates";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Friendship extends Model {
  static async createFromInvite({playerA, playerB, state}) {
    let friendship = new Friendship()
    friendship.state = state ?? FriendshipStates.sent
    await friendship.playerA().associate(playerA)
    await friendship.playerB().associate(playerB)
  }

  setState(state) {
    FriendshipStates.enumKeys
    this.state = state
  }

  playerA() {
    return this.belongsTo('App/Models/Player', 'player_a_id', 'id')
  }

  playerB() {
    return this.belongsTo('App/Models/Player', 'player_b_id', 'id')
  }
}

module.exports = Friendship
