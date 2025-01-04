
import express from 'express'
import { createPost, getAllPosts } from '../controllers/post.controller.js'


const router =  express.Router()


router.post('/post',createPost)
router.get('/getpost',getAllPosts)

export default router
