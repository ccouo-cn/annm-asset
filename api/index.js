const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hello from Vercel API' });
});

module.exports = app;
