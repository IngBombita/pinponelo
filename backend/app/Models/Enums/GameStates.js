const Enumify = require('enumify')

class GameStates extends Enumify {
  static scheduled = new GameStates()
  static pending = new GameStates()
  static accepted = new GameStates()
  static playing = new GameStates()
  static ended = new GameStates()
  static cancelled = new GameStates()
  static _ = this.closeEnum()
}

module.exports = GameStates
