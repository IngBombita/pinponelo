const Auth = use('auth');

class CurrentUserService {
  async getUser() {
    return await Auth.getUser();
  }
}

module.exports = CurrentUserService
