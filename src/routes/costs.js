const express = require('express');
const router = express.Router();
const fetchBillingData = require('../collectors/billingCollector');

router.get('/', (req, res) => {
  const data = fetchBillingData();
  res.json({ costs: data });
});

module.exports = router;