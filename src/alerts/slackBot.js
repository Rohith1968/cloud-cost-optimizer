const axios = require('axios');
module.exports = async function sendSlackAlert(alert) {
  const webhookUrl = process.env.SLACK_WEBHOOK;
  if (!webhookUrl) return;

  const payload = {
    text: ` ${alert.severity.toUpperCase()} Alert: ${alert.message}\nCost: $${alert.cost} | Service: ${alert.service}`
  };
  try {
    await axios.post(webhookUrl, payload);
  } catch (err) {
    console.error('Failed to send Slack alert:', err.message);
  }
};