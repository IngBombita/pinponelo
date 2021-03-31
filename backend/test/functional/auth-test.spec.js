'use strict'

const { test, trait } = use('Test/Suite')('Auth Test')

trait('Test/ApiClient')
trait('Auth/Client')
trait('Session/Client')

test('get list of positions', async ({ client }) => {
  const user = await User.find(1)

  const response = await client
    .get('posts')
    .loginVia(user)
    .end()
})
