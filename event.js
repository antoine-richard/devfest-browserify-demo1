var moment = require('moment');

var event = {
  name: "DevFest",
  getYear: function() {
    return moment().year();
  }
}

module.exports = event;