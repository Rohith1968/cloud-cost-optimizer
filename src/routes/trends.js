const express = require('express');
const router = express.Router();
const analyzeTrends = require('../analytics/trendAnalyzer');
const fetchBillingData = require('../collectors/billingCollector');

router.get('/', (req, res) => {
  const billing = fetchBillingData();
  const trends = analyzeTrends(billing);
  res.json({ trends });
});

module.exports = router;