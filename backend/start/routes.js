'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route
  .get('/me', 'PlayerController.me')
  .middleware('auth')
Route
  .get('/players/search', 'PlayerController.search')
  .middleware('auth')
Route
  .get('/friend/invite/:player_id', 'PlayerController.sendFriendRequest')
  .middleware('auth')

Route
  .get('/friendships', 'FriendshipController.index')
  .middleware('auth')

Route
  .put('/friendships/:friendship_id', 'FriendshipController.update')
  .middleware('auth')

Route.post('/register', 'PlayerController.register').middleware('guest')
