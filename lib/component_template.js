var Constants = require('../constants/%NAME%Constants');
var Store = require('../stores/%NAME%Store');
var Actions = require('../actions/%NAME%Actions');

var %NAME% = Radium(React.createClass({
  // Initializer
  getInitialState: function() {
    //Actions.get();
    return {
        //data: Store.getData()
    } 
  },

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

module.exports = %NAME%;