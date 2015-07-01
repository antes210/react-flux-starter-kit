// var Constants = require('../constants/AppConstants');
// var Store = require('../stores/AppStore');
// var Actions = require('../actions/AppActions');

var App = Radium(React.createClass({
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
    return(
      <Row>
        <Col>
          <Jumbotron className="text-center">
            <h1>Welcome to React-Flux-Starter-Kit</h1> 
          </Jumbotron>
        </Col>
      </Row>
    )
  }

}));

var styles ={
  base:{
    
  }
}

module.exports = App;
