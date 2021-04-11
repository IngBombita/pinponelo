'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTournamentsSchema extends Schema {
  up() {
    this.create('tournaments', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.json('elo_range')
    })
  }

  down() {
    this.drop('tournaments')
  }
}

module.exports = CreateTournamentsSchema
