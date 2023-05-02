const serverless = require('serverless-http');
const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/users', userRoutes);

module.exports = {
  getUser: serverless(app),
  getUsers: serverless(app),
  createUser: serverless(app),
};
