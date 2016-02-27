var Dispatcher = require('../dispatchers/%UNDER%_dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/%UNDER%_constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

//var Data = [];

//Listeners
var %NAME%Store = assign({}, EventEmitter.prototype, {  
  emitChange: function() {
      this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
  },
  // Use Data in component
  // getData: function() {
  //     return Data;
  // }
});

//Process Actions
%NAME%Store.dispatchToken = Dispatcher.register(function(payload){
  switch(payload.type){
    // case Constants.GET: 
    //   getData();
    //   break;
    // case Constants.SET:
    //   setData();
    //   break;      
  }

});

//Define Custom Actions
// function getData(){
//   var promise = $.ajax("http://localhost:3000/data",{dataType: 'json'});

//   promise.then( function(response){
//      Data = response.Data;   
//      %NAME%Store.emitChange();
//  });
// }

// function setData(){
//   var Data ="DATA";
//   var promise = $.post("http://localhost:3000/documents",{data: document});

//   promise.then( function(response){
//      getData();
//      %NAME%Store.emitChange();
//  });
//}

module.exports = %NAME%Store;