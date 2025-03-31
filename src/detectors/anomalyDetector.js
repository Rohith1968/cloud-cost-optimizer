module.exports = function detectAnomalies(data) {
    return data.filter(item => item.cost > 100).map(item => ({
      ...item,
      severity: item.cost > 150 ? 'critical' : 'warning',
      message: `Anomaly detected in ${item.service}`
    }));
  };