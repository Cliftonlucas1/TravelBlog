const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/comments', controllers.getAllComments)
router.post('/comments/:id', controllers.createComment)
router.delete('/comments/:id', controllers.deleteComment)
router.post('/posts', controllers.createPost)
router.get('/posts', controllers.getAllPosts)
router.get('/posts/:id', controllers.getPostById)
router.put('/posts/:id', controllers.updatePost)
router.delete('/posts/:id', controllers.deletePost)

module.exports = router
