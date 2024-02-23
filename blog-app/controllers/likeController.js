//get the model
const Post = require("../models/postModel")
const Like = require("../models/likeModel")

//like a post
exports.likePost = async(req,res) => {
    try{
        const {post, user} = req.body;
        const like = new Like ({
            post, user
        })
        const savedLike = await like.save();

        //update post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{likes:savedLike._id}}, {new:true}).populate("likes").exec()

        //send successfull response
        res.status(200).json({
            post: updatedPost
        })
    }
    catch(error) {
        res.status(200).json({
           error: "error while liking a post"
        })
    }
}

exports.unlikePost = async(req,res) => {
    try{
        const {post,like} = req.body;

        //find and delete the like from like
        const deletedLike = await Like.findOneAndDelete({post: post, _id: like});


        //update post (coz we deleted like)
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new:true})
        
        res.status(200).json({
            post: updatedPost,
        })

    }
    catch(error){
        res.status(500).json({
            message: "error while unliking a post"
        })
    }
}







exports.dummyLink = (req,res) => {
    res.send("This is dummy page")
}