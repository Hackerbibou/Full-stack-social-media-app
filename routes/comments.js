var express = require('express');
var router = express.Router();
const commentRouter = require('../controllers/comments')
/* GET users listing. */

router.post('/:postId', commentRouter.create);



module.exports = router;
