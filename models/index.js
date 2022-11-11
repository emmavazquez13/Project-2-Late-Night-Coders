// Import and require model tables
const User = require('./User');
const History = require('./History');
const Goal = require('./Goal');

// Model Relationships
User.belongsTo(Goal, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Goal.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(History, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

History.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, History, Goal };