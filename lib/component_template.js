// var Constants = require('../constants/%UNDER%_constants');
// var Store = require('../stores/%UNDER%_store');
// var Actions = require('../actions/%UNDER%_actions');

var %NAME% = Radium(React.createClass({
  // Initializer
  //getInitialState: function() {
    //Actions.get();
    //return {
        //data: Store.getData()
    //} 
  //},

  //Event Listener    
  componentWillMount: function() {
     //Store.addChangeListener(this.onChange);
  },

  //Callback On Change
  onChange: function() {
   this.setState({
     //data: Store.getData()
   });
  },
  render: function(){
    // return(
    //   <div>
    //     {this.state.gameLeaders.map(function(f,i){
    //       return <li>{f} at index {i}</li>;
    //     })}
    //   <div>    
    // )
  }

}));

var styles ={
  base:{

  }
}

module.exports = %NAME%;