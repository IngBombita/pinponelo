'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerSchema extends Schema {
  up() {
    this.create('players', (table) => {
      table.increments()
      table.string('username', 80).notNullable()
      table.integer('tag', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('players')
  }
}

module.exports = PlayerSchema
