'use strict'

const Friendship = use("App/Models/Friendship");
const Database = use("Database")

class FriendshipController {

  async index({auth, request, response}) {
    let player = await auth.getUser();
    let {state} = request.all()

    if (state) {
      let friendships = await Database
        .from('friendships')
        .innerJoin('players', 'players.id', 'friendships.player_b_id')
        .whereRaw('player_a_id = :playerA AND state = :state', {
          playerA: player.id, state
        })
      response.json({data: friendships})
      return;
    }

    let friendships = await Database
      .from('friendships')
      .whereRaw('player_a_id = :playerA OR player_b_id = :playerB', {playerA: player.id, playerB: player.id})
    response.json({data: friendships})
  }

  async update({params, request, response}) {
    let {state} = request.all()
    let friendship = await Friendship.find(params.friendship_id)
    friendship.state = state
    await friendship.save()

    response.json({message: 'Friendship updated'})
  }
}

module.exports = FriendshipController
