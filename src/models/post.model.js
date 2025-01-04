
import mongoose from "mongoose";


const postSchema = new mongoose.Schema({

title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
likedBy :[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
],
shareBy:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
],
commentBy:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
]

},{
    timestamps:true
}
)

export default mongoose.model("post",postSchema)









