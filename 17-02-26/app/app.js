import Express from 'express'
import userRoutes from './routes/userRoutes.js'

const App = Express()

App.use(Express.json())
App.use('/', userRoutes)

export default App