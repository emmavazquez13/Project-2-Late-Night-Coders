const router = require('express').Router();
const userRoutes = require('./userRoutes');
const historyRoutes = require('./historyRoutes');
const goalRoutes = require('./goalRoutes');

router.use('/users', userRoutes);
router.use('/history', historyRoutes);
router.use('/goal', goalRoutes);

module.exports = router;