const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI; // Set your MongoDB connection string in .env

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
