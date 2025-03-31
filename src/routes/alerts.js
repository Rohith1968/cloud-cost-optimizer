const express = require('express');
const router = express.Router();
const detectAnomalies = require('../detectors/anomalyDetector');
const fetchBillingData = require('../collectors/billingCollector');

router.get('/', (req, res) => {
  const billing = fetchBillingData();
  const alerts = detectAnomalies(billing);
  res.json({ alerts });
});

module.exports = router;