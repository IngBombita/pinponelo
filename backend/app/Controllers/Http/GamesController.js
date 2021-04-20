'use strict'

const Game = use("App/Models/Game");
const GameStates = use("App/Models/Enums/GameStates");
const Database = use("Database")

class GamesController {
  async create({auth, request, response}) {
    const {playerAId} = auth.getUser();
    const {playerBId} = request.body;

    let game = await Database.from('games')
      .where('player_b_id', '=', playerBId)
      .where('player_a_id', '=', playerAId)
      .where('state', '=', GameStates.pending)
      .first();

    if (game) {
      return response.json({error: 'There is another game pending with this player'}, 400)
    }

    let playerA = await Database.from('players').find(playerAId).first();
    let playerB = await Database.from('players').find(playerBId).first();

    game = Game.create(playerA, playerB, GameStates.pending)
    await game.save(game)

    return response.json({message: 'Created'}, 201)
  }

  async update({auth, request, response}) {
    const {playerBId} = auth.getUser();
    const {playerAId} = request.body;

    let game = await Database.from('games')
      .where('player_b_id', '=', playerBId)
      .where('player_a_id', '=', playerAId)
      .where('state', '=', GameStates.pending)
      .first();

    if (!game) {
      return response.json({error: 'No games found with this player'}, 404)
    }

    game.state = GameStates.accepted
    game.save(game)

    return response.json({message: 'Updated'}, 201)
  }
}
