'use strict';

const express = require('express');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());
