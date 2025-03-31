module.exports = function generateDashboardData(data) {
    const summary = {};
    data.forEach(item => {
      if (!summary[item.service]) summary[item.service] = 0;
      summary[item.service] += item.cost;
    });
    return summary;
  };