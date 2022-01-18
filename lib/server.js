'use strict';

const express = require('express');
// Prepare the express app
const app = express();
const userRoutes = require('./routes.user.js');
// Process JSON input and put the data on req.body
app.use(express.json());
// Process FORM input and put the data on req.body
app.use(express.urlencoded({ extended: true })); // TEST Does this go with router, or stay here?
app.use(userRoutes);

module.exports = {
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server is listening on ', PORT);
    });
  }, app,
};