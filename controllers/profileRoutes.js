const router = require('express').Router();
const { User, History } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const historyData = await History.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ['id', 'date', 'calories', 'food_name', 'quantity'],
      include: [
        {
          model: User,
          attributes: ['username', 'calorie_goal'],
        },
      ],
    });

    const historys = historyData.map((history) => history.get({ plain: true }));

    res.render('profile', { historys, logged_in: true });
  } catch (err) {
    res.status(500).json(err); // subject to change
  }
});

// Renders add food page
router.get('/add', (req, res) => {
  res.render('add-food');
});

module.exports = router;
