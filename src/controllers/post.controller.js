import Post from '../models/post.model.js'
import User from '../models/user.model.js'

const createPost = async (req,res) => {

const  {title , description} = req.body;

if (!title) return res.json({message:"Title is required"})
if (!description) return res.json({message:"Description is required"})

//create post
const post = await Post.create({
    title,
    description
})



res.json({message:"Post created successfully",
    data:post
})

    
}

//get all posts
const getAllPosts = async (req,res) => {

    let allPosts;
 
allPosts = await Post.find({}).populate("likedBy").populate("shareBy").populate("commentBy")
if (!allPosts) return res.json({message:"No such posts found"})

res.json(allPosts)


} 

export {createPost,getAllPosts}
