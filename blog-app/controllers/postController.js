const { json } = require("express");
const Post = require("../models/postModel")

exports.createPost = async(req,res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body
        })
        const savedPost = await post.save()

        res.status(200).json({
            post:savedPost
        })
    }
    catch(err) {
        res.status(500).json({
            error: "error while creating post"
        })
    }
}


//need some mote testing after completing likeController
exports.getAllPosts = async(req,res) => {
    try{
        const posts = await Post.find({}).populate("comments").populate("likes").exec()

        res.status(200).json({
            post: posts
        })
    }
    catch(error) {
        res.status(500).json({
            message: "error white fetching all posts"
        })
    }
}