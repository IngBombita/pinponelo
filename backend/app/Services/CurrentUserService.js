const Auth = use('@adonisjs/auth');

/**
 * Por favor alguien haga funcionar esto
 *
 * */
class CurrentUserService {
  async getUser() {
    return await Auth.getUser();
  }
}

module.exports = CurrentUserService
