var express = require('express');
var router = express.Router();
const likesRouter = require('../controllers/likes')

/* GET users listing. */

router.post('/:postId', likesRouter.createLp);
router.post('/index/:postId', likesRouter.createLp1);


router.post('/:postId/:commentId', likesRouter.createLc);


module.exports = router;
