var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var %NAME%Dispatcher = assign(new Dispatcher(), {
  handleViewAction: function(payload) {
    this.dispatch(payload)
  }
});

module.exports = %NAME%Dispatcher;