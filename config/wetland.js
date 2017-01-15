const path = require('path');

module.exports.wetland = {
  entityPath: path.resolve(process.cwd(), 'api', 'entity'),
  mapping   : {defaultNamesToUnderscore: true}
};
