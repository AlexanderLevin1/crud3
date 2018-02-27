const sequelize = require('sequelize');
const conn = new sequelize (process.env.DATABASE_URL || 'postgres://localhost/crud_customers');

module.exports = conn;