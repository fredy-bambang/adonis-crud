'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// Route.on('/').render('welcome')
// Route.get('/', 'CustomerController.index')

Route.get('/create', 'CustomerController.create')
Route.get('/test', function * (req, res) {
    console.log('routing test di panggil');
    res.send('This is the home page');
})
Route.get('/layout', function * (req, res) {
    // res.send('This is layout');
    yield res.sendView('customer.create')
})

Route.resource('/customers', 'CustomerController')
// Route.post('/customers', 'CustomerController.store')

Route.get('/', 'ListController.show')
Route.get('/login', 'AuthController.index')
Route.get('/logout', 'AuthController.logout')
Route.post('/login', 'AuthController.login')
Route.get('/register', 'RegisterController.index')
Route.post('register', 'RegisterController.doRegister')

//sample api return with authentication.. 
//better check this out
Route.get('/got', function * (request, response) {
    response.status(200).json({ user: 'prosper' })
}).middleware('auth')