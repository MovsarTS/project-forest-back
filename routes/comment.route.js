const {Router} = require('express');
const router = Router();
const {commentController} = require('../controllers/comment.controller');

router.get('/comments', commentController.getAllComments);
router.post('/comments', commentController.addComment);
router.delete('/comments/:id', commentController.deleteComm);
router.patch('/comments/:id', commentController.addLike);
router.patch('/comments/del/:id', commentController.deleteLike);

module.exports = router;