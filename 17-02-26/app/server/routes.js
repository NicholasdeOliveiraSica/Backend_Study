import App from '../app'
import userController from '../controllers/userController'

App.get('/users', userController.index)
 
App.get('/teste', userController.teste)