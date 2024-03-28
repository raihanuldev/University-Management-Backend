import express from 'express'
import userController from './user.controller'
const router = express.Router()


// Routes
router.post('/create-user',userController.createUser)


export default router;