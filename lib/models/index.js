'use strict';


const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.DATABASE_URL || 'sqlite:memory';

const sequelize = new Sequelize(POSTGRES_URI, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
// Create a Sequelize model
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});