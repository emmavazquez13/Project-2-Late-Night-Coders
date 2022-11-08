const router = require('express').Router();
const { History, User } = require('../../models');
const withAuth = require('../../utils/auth');

// READ all user history route
router.get('/', async (req, res) => {
  try {
    const historyData = await History.findAll({
      attributes: ['id', 'date', 'calories', 'food_name', 'quantity'],
      order: [['date', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    res.status(200).json(historyData.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ one History route
router.get('/:id', async (req, res) => {
  try {
    const historyData = await History.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'date', 'calories', 'food_name', 'quantity'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (!historyData) {
      res.status(404).json({ message: 'No history found with this id' });
      return;
    }

    res.status(200).json(historyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE food history route
router.post('/', withAuth, async (req, res) => {
  try {
    const newHistory = await History.create({
      calories: req.body.calories,
      food_name: req.body.food_name,
      quantity: req.body.quantity,
      user_id: req.session.user_id,
    });

    res.status(200).json(newHistory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE food history route
router.put('/:id', async (req, res) => {
  try {
    // update history data
    const updatedHistory = await History.update(
      { calories: req.body.calories, food_name: req.body.food_name, quantity: req.body.quantity },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updatedHistory) {
      res.status(404).json({ message: 'No food history found with this id' });
      return;
    }

    res.status(200).json(updatedHistory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE food history route
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const historyData = await History.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!historyData) {
      res.status(404).json({ message: 'No food history found with this id!' });
      return;
    }

    res.status(200).json(historyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
