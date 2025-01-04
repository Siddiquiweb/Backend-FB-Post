
import express from 'express'
import { createUser, likePost, PostComments, SharePost } from '../controllers/user.controller.js'

const router = express.Router()

router.post('/user',createUser)
router.post('/user/:id',likePost)
router.post('/user/share/:id',SharePost)
router.post('/user/comment/:id',PostComments)

export default router

