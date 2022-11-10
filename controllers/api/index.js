const router = require('express').Router();
const userRoutes = require('./userRoutes');
const historyRoutes = require('./historyRoutes');
const foodRoutes = require('./foodRoutes');

router.use('/users', userRoutes);
router.use('/history', historyRoutes);
router.use('/fetch_food', foodRoutes);

module.exports = router;