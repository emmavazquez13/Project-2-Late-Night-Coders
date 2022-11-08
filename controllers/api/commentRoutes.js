const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// READ one comment route
router.get('/', async (req, res) => {
  try {
    const comment = await Comment.findAll({});
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ all comments route
router.get('/:id', async (req, res) => {
  try {
    const postComments = await Comment.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(postComments);
  } catch (err) {
    res.status(400).json(err);
  }
});

// CREATE comment route
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE comment route
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      {
        comment_text: req.body.comment_text,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json(err);
  }
});

// DELETE comment route
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
