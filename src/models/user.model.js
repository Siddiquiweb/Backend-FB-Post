import mongoose, { model }  from "mongoose"

const userSchema = new mongoose.Schema({

name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
likePost:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"
},
sharePost:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"
},
comments:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"
},

}) 


export default mongoose.model("User",userSchema)



