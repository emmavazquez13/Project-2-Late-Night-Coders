const router = require('express').Router();
const { User, History, Goal } = require('../models');
const withAuth = require('../utils/auth');

// GET homepage route
router.get('/', async (req, res) => {
  try {
    res.render('homepage', { logged_in: req.params.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('diary', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: History }, { model: Goal }],
    });

    const user = userData.get({ plain: true });

    res.render('diary', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET login page route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/diary');
    return;
  }

  res.render('login');
});

// GET signup page route
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
