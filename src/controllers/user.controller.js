
import User from '../models/user.model.js'
import Post from '../models/post.model.js'
import mongoose, { mongo } from 'mongoose';
const createUser = async (req,res) => {

const {name , email} = req.body;

if (!name) return res.json({message:"Name is required"})
if (!email) return res.json({message:"email is required"})

const user =await User.create({
    name,
    email,
   
})

res.json({
    message:"User created successfully",
    data:user
})


}


//like post

const likePost = async(req,res)=>{
    

    const {id} =req.params
    const {likePost} = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({
            message:"Not a valid ID"
        })
    }

const user =await User.findById(id)
if (!user) return res.json({message:"User Not found"})


const post = await Post.findByIdAndUpdate(likePost, {
        $push: { likedBy: user._id },
      });
      
    res.json(post)

}

// share post

const SharePost = async(req,res)=>{
    
    const {id} =req.params
    const {sharePost} = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({
            message:"Not a valid ID"
        })
    }

const user =  await User.findById(id)

if (!user) return res.json({message:"User Not found"})

const post = await Post.findByIdAndUpdate(sharePost, {
        $push: { shareBy: user._id },
      }).populate("shareBy");

    res.json(post)

}

//comments

const PostComments = async(req,res)=>{
    
    const {id} =req.params
    const {comments} = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({
            message:"Not a valid ID"
        })
    }

const user =  await User.findById(id)

if (!user) return res.json({message:"User Not found"})

const post = await Post.findByIdAndUpdate(comments, {
        $push: { commentBy: user._id },
      });

    res.json(post)

}





export { createUser , likePost ,SharePost,PostComments }