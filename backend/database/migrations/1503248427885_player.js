'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerSchema extends Schema {
  up() {
    this.create('players', (table) => {
      table.increments()
      table.string('username', 80).notNullable()
      table.integer('tag').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('description', 254).nullable()
      table.string('team', 80).nullable()
      table.string('avatar', 254).nullable()
      table.integer('elo').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('players')
  }
}

module.exports = PlayerSchema
