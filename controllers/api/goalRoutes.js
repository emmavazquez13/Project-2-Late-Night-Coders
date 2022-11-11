const router = require('express').Router();
const { Goal } = require('../../models');

// CREATE goal route
router.post('/', async (req, res) => {
  try {
    const newGoal = await Goal.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE calorie goal route
router.put('/:id', async (req, res) => {
  try {
    // update goal data
    const updatedGoal = await Goal.update(
      { calorie_goal: req.body.calorie_goal },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updatedGoal) {
      res.status(404).json({ message: 'No calorie goal found with this id' });
      return;
    }

    res.status(200).json(updatedGoal);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
