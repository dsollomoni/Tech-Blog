const router = require('express').Router();

const userRoutes = require('../../controllers/api/user-routes');
const postRoutes = require('../../controllers/api/post-routes');
const commentRoutes = require('../../controllers/api/comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;