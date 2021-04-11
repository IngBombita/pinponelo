'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateFriendsSchema extends Schema {
  up() {
    this.create('friendships', (table) => {
      table.increments()
      table.timestamps()
      table.integer('player_a_id').unsigned().references('id').inTable('players')
      table.integer('player_b_id').unsigned().references('id').inTable('players')
      table.integer('state').notNullable()
    })
  }

  down() {
    this.drop('friendships')
  }
}

module.exports = CreateFriendsSchema
