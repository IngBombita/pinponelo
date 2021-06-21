const Enumify = require("enumify");

class FriendshipStates extends Enumify {
  static sent = new FriendshipStates()
  static accepted = new FriendshipStates()
  static cancelled = new FriendshipStates()
  static _ = this.closeEnum()
}

module.exports = FriendshipStates
