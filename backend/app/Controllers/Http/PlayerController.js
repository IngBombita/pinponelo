'use strict'

const Player = use("App/Models/Player");
const Friendship = use("App/Models/Friendship");
const FriendshipStates = use("App/Models/Enums/FriendshipStates");
const Database = use("Database")

const MIN_TAG_VALUE = 100;
const MAX_TAG_VALUE = 1000;
const DEFAULT_ELO = 1000;

class PlayerController {

  async me({auth, response}) {
    try {
      let player = await auth.getUser()
      player.friends = await Database
        .from('friendships')
        .whereRaw('(player_a_id = :playerA OR player_b_id = :playerB) AND state = 2', {
          playerA: player.id,
          playerB: player.id
        }).getCount()

      response.json(player, 200)
    } catch (error) {
      console.log(error)
      response.send('Credentials missing', 301)
    }
  }

  async update({request, response, params}) {
    const {username, description, avatar, team} = request.all()

    let player = await Database.from('players').find(params.id).first();

    if (!player) {
      response.json({error: 'Player not found'}, 404)
    }

    player.username = username
    player.description = description
    player.team = team
    player.avatar = avatar

    await player.save(player);

    response.json({message: 'Updated', player}, 200)
  }

  async register({request, response}) {
    const {email, password, username} = request.all()

    let player = await Database.from('players').where({email}).first();

    if (player) {
      response.json({error: 'Email have been already used'}, 400)
    }

    player = new Player()
    player.email = email
    player.password = password
    player.username = username
    player.elo = DEFAULT_ELO
    let tag, exists
    do {
      tag = Math.floor(Math.random() * (MAX_TAG_VALUE - MIN_TAG_VALUE) + MIN_TAG_VALUE);
      exists = await Database.from('players').where({username, tag}).first();
    } while (exists);
    player.tag = tag
    await player.save(player);

    response.json({message: 'Created', player}, 201)
  }

  async search({request, response}) {
    let {username, tag} = request.all()
    let players = await Player.query()

    if (username) {
      players.where('username', 'LIKE', username + '%')
    }

    if (tag) {
      players.where('tag', '=', tag)
    }

    players.limit(5).fetch()
    response.json({players})
  }

  async sendFriendRequest({params, auth, response}) {
    try {
      let playerA = await auth.getUser()
      let playerB = await Player.find(params.player_id)
      let friendship = new Friendship()
      friendship.state = params.state ?? FriendshipStates.SENT
      await friendship.playerA().associate(playerA)
      await friendship.playerB().associate(playerB)
      await friendship.save(friendship)

      response.json({message: 'Created'}, 201)
    } catch (error) {
      console.error(error)
      response.send({error: JSON.stringify(error)})
    }
  }
}

module.exports = PlayerController
