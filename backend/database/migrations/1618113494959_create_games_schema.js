'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateGamesSchema extends Schema {
  up() {
    this.create('games', (table) => {
      table.increments()
      table.timestamps()
      table.integer('player_a_id').unsigned().references('id').inTable('players')
      table.integer('player_b_id').unsigned().references('id').inTable('players')
      table.integer('tournament_id').unsigned().nullable().references('id').inTable('tournaments')
      table.integer('state').notNullable()
      table.integer('points_a').nullable()
      table.integer('points_b').nullable()
      table.datetime('played_at')
    })
  }

  down() {
    this.drop('games')
  }
}

module.exports = CreateGamesSchema
