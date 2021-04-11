const Enumify = require('enumify')

class GameStates extends Enumify {
  static scheduled = new GameStates()
  static playing = new GameStates()
  static ended = new GameStates()
  static _ = this.closeEnum()
}

module.exports = GameStates
