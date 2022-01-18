'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.DATABASE_URL || 'sqlite:memory';

const userSchema = require('./user.schema.js');

const sequelize = new Sequelize(POSTGRES_URI, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const UserModel = userSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  UserModel,
};