'use strict'

const CurrentUser = use('App/Services/CurrentUserService')

class TournamentController {
  create ({request, response}) {
    let player = CurrentUser.getUser();
  }
}

module.exports = TournamentController
