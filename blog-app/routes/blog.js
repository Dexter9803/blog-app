const express = require("express")
const router = express.Router()

//import controller
const {dummyLink} = require("../controllers/likeController")
const {createComment} = require("../controllers/commentController")
const {createPost} = require("../controllers/postController")
const {getAllPosts} = require("../controllers/postController")
const {likePost} = require("../controllers/likeController")
const {unlikePost} = require("../controllers/likeController")


//mapping create
router.get("/dummyroute", dummyLink)
router.post("/comments/create" , createComment)
router.post("/posts/create", createPost)
router.get("/posts/get", getAllPosts)
router.post("/likes/like", likePost)
router.post("/likes/unlike", unlikePost)

//export
module.exports = router