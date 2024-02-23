//import model
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")

//bussiness logic
exports.createComment = async(req,res) => {
    try{
        //to use "save" funtion, make sure object is ready 
        const {post, user, body} = req.body
        //craete commment obj
        const comment = new Comment({
            post, user, body
        })

        //save into database
        const savedComment = await comment.save()

        //find post by ID & add new comment to its commentArray
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}}, {new:true})
                            .populate("comments")
                            .exec()

        res.status(200).json({
            post:updatedPost
        })
    }
    catch(err){
        return res.status(500).json({
            error: err,
            message: "error while creating comment"
        })
    }
}