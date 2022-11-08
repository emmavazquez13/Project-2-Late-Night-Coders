const router = require('express').Router();

// GET homepage route
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET login page route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// GET signup page route
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
