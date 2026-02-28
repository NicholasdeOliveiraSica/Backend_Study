import { Router } from 'express'
import userController from '../controllers/userController.js'

const router = Router()

router.get('/users', userController.index) 
router.get('/teste', userController.teste)

export default router