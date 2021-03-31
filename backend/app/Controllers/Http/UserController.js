'use strict'


const User = require("../../Models/User");
const Database = use('Database');

class UserController {

  async me({request, response}) {
    return await auth.getUser()
  }

  async login({auth, request}) {
    const {email, password} = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }

  async register({request, response}) {
    const {email, password, username} = request.all()
    let user = new User()
    user.email = email
    user.password = password
    user.username = username
    await user.save(user);

    response.json({message: 'Created'}, 201);
  }
}

module.exports = UserController
