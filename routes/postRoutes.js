const express = require("express");
const {
  createPostController,
  getAllPostController,
  getUserPostsController,
  deletePostController,
  updatePostController,
} = require("../controllers/postController");
const { requireSignIn } = require("../controllers/userController");

// router object
const router = express.Router();

// CREATE POST || POST
router.post("/create-post", requireSignIn, createPostController);

// GET ALL POSTS
router.get("/get-all-post", getAllPostController);

// GET USER POSTS
router.get("/get-user-post", requireSignIn, getUserPostsController);

// DELETE POST
router.delete("/delete-post/:id", requireSignIn, deletePostController);

// UPDATE POST
router.put("/update-post/:id", requireSignIn, updatePostController);

// export
module.exports = router;
