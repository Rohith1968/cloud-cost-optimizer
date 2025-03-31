const express = require('express');
const app = express();
const costsRoute = require('./routes/costs');
const alertsRoute = require('./routes/alerts');
const trendsRoute = require('./routes/trends');

require('dotenv').config();

app.use(express.json());

app.use('/costs', costsRoute);
app.use('/alerts', alertsRoute);
app.use('/trends', trendsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});