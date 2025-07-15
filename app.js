// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // replaces body-parser

app.use('/api/items', itemRoutes);

// Connect to MongoDB and start server
const PORT = 5000;
mongoose.connect('mongodb://localhost:27017/nodecrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}).catch(err => console.error(err));
