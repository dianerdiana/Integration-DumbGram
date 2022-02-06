const express = require("express");

const router = express.Router();

//import middleware
const { auth } = require('../middleware/auth')

//import authorization
const {
  register, login, checkAuth
} = require("../controllers/auth");

//import users
const {
  getUsers, editUser, deleteUser, getUser
} =require('../controllers/users')

//import follow
const { getFollowers, getFollowing, addFollowUser, followersCount, followingCount } = require('../controllers/follows');
const { addFeed, getFollowedFeed, getFeeds, getFeedsUser, countFeedsUser } = require("../controllers/feeds");

//import comments
const { getComments, addComment } = require('../controllers/comments')

//import message
const { addMessage, getMessageUser } = require('../controllers/messages');
const { uploadFile } = require("../middleware/uploadFile");

//route auth
router.post("/register", register)
router.post("/login", login)
router.get("/check-auth", auth, checkAuth);

//route user
router.get("/users", auth, getUsers)
router.patch("/user/:id", auth, uploadFile('image'), editUser)
router.delete("/user/:id", deleteUser)
router.get("/user/:id", auth, getUser)

//route follows
router.get("/followers/:id", getFollowers)
router.get("/following/:id", getFollowing)
router.post("/follow-user/:id", auth, addFollowUser)
router.get("/followers-count/:id", followersCount)
router.get("/following-count/:id", followingCount)

//route feeds
router.post("/feed", auth, uploadFile('image'), addFeed)
router.get("/feed/:id", auth, getFollowedFeed)
router.get("/feeds", getFeeds)
router.get("/feeds-user/:id", getFeedsUser)
router.get("/count-feeds/:id", countFeedsUser)

//route comments
router.get("/comments/:id", auth, getComments)
router.post("/comment", auth, addComment)

//route messages
router.post("/message/:id", auth, addMessage)
router.get("/message-user/:id", auth, getMessageUser)

module.exports = router;