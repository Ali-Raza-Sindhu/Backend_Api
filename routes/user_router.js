import express from 'express'
import { createUser, getAllUser } from '../controllers/user_controller.js'

const router = express.Router()

router.post('/create_user', createUser)
router.get('/get_user', getAllUser)

export default router;
