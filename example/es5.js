'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _es6Constants = require('./es6-constants');

var outerData = _interopRequireWildcard(_es6Constants);

console.log(outerData.a);
console.log(outerData.b);
