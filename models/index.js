// Import and require model tables
const User = require('./User');
const History = require('./History');

// Model Relationships
User.hasMany(History, {
  foreignKey: 'user_id',
});

History.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, History };