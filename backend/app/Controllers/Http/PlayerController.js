'use strict'

const Player = use("App/Models/Player");
const Friendship = use("App/Models/Friendship");
const FriendshipStates = use("App/Models/Enums/FriendshipStates");
const Database = use("Database")

const MIN_TAG_VALUE = 100;
const MAX_TAG_VALUE = 1000;

class PlayerController {

  async me({auth, response}) {
    try {
      return await auth.getUser()
    } catch (error) {
      response.send('Credentials missing')
    }
  }

  async register({request, response}) {
    const {email, password, username} = request.all()

    let player = await Database().from('players').where({
      email
    });

    if (player) {
      return ({error: 'Email have been already used'})
    }

    player = new Player()
    player.email = email
    player.password = password
    player.username = username
    let tag, exists
    do {
      tag = Math.floor(Math.random() * (MAX_TAG_VALUE - MIN_TAG_VALUE) + MIN_TAG_VALUE);
      exists = await Database().from('players').where({username, tag}).first();
    } while (exists);
    player.tag = tag
    await player.save(player);

    response.json({message: 'Created', player}, 201)
  }

  async search({request, response}) {
    let {username, tag} = request.all()
    let players = await Player
      .query()
      .where('username', 'LIKE', username + '%')
      .where('tag', '=', tag)
      .fetch()

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
