'use strict'

const Player = use("App/Models/Player");
const Database = use("Database")
const TagCreator = use('App/Services/TagCreator')

const DEFAULT_ELO = 1000;

class PlayerController {

  async me({response,auth}) {
    let player = await auth.getUser();
    player.friends = await Database
      .from('friendships')
      .whereRaw('(player_a_id = :playerA OR player_b_id = :playerB) AND state = 2', {
        playerA: player.id,
        playerB: player.id
      }).getCount()

    response.json(player, 200)
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
    // response.json({'hola':TagCreator.create, email, password, username});
    let player = await Database.from('players').where({email}).first();

    if (player) {
      response.json({error: 'Email have been already used'}, 400)
    }

    player = new Player()
    player.email = email
    player.password = password
    player.username = username
    player.elo = DEFAULT_ELO
    // player.tag = await TagCreator.create(username)

    await player.save(player);

    response.json({message: 'Created', player}, 201)
  }

  async login ({ request, auth }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
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
}

module.exports = PlayerController
