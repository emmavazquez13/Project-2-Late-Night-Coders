const router = require('express').Router();
const fetch = require('node-fetch');

// Get all foods
router.get('/fetch_food', async (req, res) => {
  console.log('/fetch_food endpoint called');
  const url = 'https://foodapi.calorieking.com/v1/foods';
  const options = {
    method: 'GET',
  };

  try {
    const foodData = await fetch(url, options);
    res.status(200).json(foodData);
  } catch (err) {
    res.status(404).json(err);
  }
});

// Get food by id
router.get('/fetch_food/:foodid', async (req, res) => {
  console.log('/fetch_food endpoint called');
  const url = `https://foodapi.calorieking.com/v1/foods/${req.params.foodid}`;
  const options = {
    method: 'GET',
  };

  try {
    const foodData = await fetch(url, options);

    if (!foodData) {
      res.status(404).json({ message: 'No food found with this id' });
      return;
    }

    res.status(200).json(foodData);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;