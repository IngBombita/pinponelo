'use strict'

const Friendship = use("App/Models/Friendship");
const Database = use("Database")
const CurrentUser = use('App/Services/CurrentUserService')
const Player = use("App/Models/Player");

class FriendshipController {

  async index({request, response}) {
    let player = CurrentUser.getUser();
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

  async create({request, response}) {
    let playerA = await CurrentUser.getUser();
    let playerB = await Player.find(request.request.input('player_id'))
    let friendship = await Friendship.createFromInvite({
      playerA, playerB, state: request.request.input('state')
    });
    await friendship.save(friendship)

    response.json({message: 'Created'}, 201)
  }

  async update({params, request, response}) {
    let {state} = request.all()
    let friendship = await Friendship.find(params.friendship_id)
    friendship.setState(state)
    await friendship.save()

    response.json({message: 'Friendship updated'})
  }
}

module.exports = FriendshipController
