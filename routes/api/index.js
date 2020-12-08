const router = require('express').Router();
const postRoutes = require('./posts');
const userRoutes = require('./users');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
