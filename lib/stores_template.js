var Dispatcher = require('../dispatchers/%UNDER%_dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/%UNDER%_constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var %NAME%Store = assign({}, EventEmitter.prototype, {  
  emitChange: function() {
      this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
  }
});

%NAME%Store.dispatchToken = Dispatcher.register(function(payload){
  
});


module.exports = %NAME%Store;