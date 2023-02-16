const Post = require('../models/post')
const Comment = require('../models/comment')

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    if (post) {
      return res.status(200).json({ post })
    }
    return res.status(404).send('Post with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Comment Section

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(comment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createComment = async (req, res) => {
  try {
    const Comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Post.findById(id)
    if (comment) {
      return res.status(200).json({ post })
    }
    return res.status(404).send('Comment with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,

  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment
}
