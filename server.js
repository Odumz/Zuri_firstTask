const express = require('express');

const app = express();

const routes = require('./route')

app.use(express.json());

app.use('/', routes)

const PORT = process.env.PORT || 5000;

try {
    app.listen(PORT, () => console.log(`Server running on Port:${PORT}`));
  } catch (e) {
    console.error(e);
  }