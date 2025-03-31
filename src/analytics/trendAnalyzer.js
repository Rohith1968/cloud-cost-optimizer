module.exports = function analyzeTrends(data) {
    const totalCost = data.reduce((sum, item) => sum + item.cost, 0);
    const average = totalCost / data.length;
    return { total: totalCost, average }; 
  };