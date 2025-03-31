const fs = require('fs');
const path = './data/billing.json';

module.exports = {
  save: (data) => fs.writeFileSync(path, JSON.stringify(data, null, 2)),
  load: () => JSON.parse(fs.readFileSync(path))
};