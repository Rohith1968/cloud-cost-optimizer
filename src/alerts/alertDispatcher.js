module.exports = function sendAlert(alert) {
    console.log(`[ALERT] ${alert.severity.toUpperCase()} - ${alert.message} ($${alert.cost})`);
  };