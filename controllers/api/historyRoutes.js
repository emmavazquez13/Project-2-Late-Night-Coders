const sequelize = require('sequelize');
const router = require('express').Router();
const { History } = require('../../models');
const withAuth = require('../../utils/auth');
const { format_date } = require('../../utils/helpers');
const fetch = require('node-fetch');
require('dotenv').config();

// CREATE food history route
router.post('/', withAuth, async (req, res) => {
  try {
    const query = req.body.name;
    const response = await fetch(
      `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
      {
        headers: {
          'X-Api-Key': process.env.API_KEY,
        },
      }
    );
    const data = await response.json();
    console.log(data);

    // Joins multiple food names into one array
    const foodNameArr = data.items.map(function (items) {
      return items.name;
    });

    // Creates formated date, food name, and nutrients
    const newHistory = await History.create({
      date: format_date(new Date()),
      food_name: foodNameArr.join(' and '),
      calories: data.items.reduce((accumulator, object) => {
        return (accumulator += object.calories);
      }, 0),
      protein: data.items.reduce((accumulator, object) => {
        return (accumulator += object.protein_g);
      }, 0),
      fat: data.items.reduce((accumulator, object) => {
        return (accumulator += object.fat_total_g);
      }, 0),
      sodium: data.items.reduce((accumulator, object) => {
        return (accumulator += object.sodium_mg);
      }, 0),
      sugar: data.items.reduce((accumulator, object) => {
        return (accumulator += object.sugar_g);
      }, 0),
      carbs: data.items.reduce((accumulator, object) => {
        return (accumulator += object.carbohydrates_total_g);
      }, 0),
      user_id: req.session.user_id,
    });

    res.status(200).json(newHistory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET daily calorie sum
router.get('/daily-sum/:id', withAuth, async (req, res) => {
  try {
    const overallSum = await History.findAll({
      where: {
        user_id: req.params.id,
      },
      group: ['date'],
      attributes: [
        'date',
        [sequelize.fn('sum', sequelize.col('calories')), 'calorie_sum'],
        [sequelize.fn('sum', sequelize.col('protein')), 'protein_sum'],
        [sequelize.fn('sum', sequelize.col('fat')), 'fat_sum'],
        [sequelize.fn('sum', sequelize.col('sodium')), 'sodium_sum'],
        [sequelize.fn('sum', sequelize.col('sugar')), 'sugar_sum'],
        [sequelize.fn('sum', sequelize.col('carbs')), 'carbs_sum'],
      ],
    });

    res.status(200).json(overallSum);
  } catch (err) {
    console.log(err);
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
