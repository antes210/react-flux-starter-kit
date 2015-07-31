// var Constants = require('../constants/%UNDER%_constants');
// var Store = require('../stores/%UNDER%_store');
// var Actions = require('../actions/%UNDER%_actions');

class %NAME% extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {data: []};
  }
  componentWillMount() {
      //Event Listener    
     //Store.addChangeListener(this.onChange);
  }

  //Callback On Change
  onChange:() {
   //this.setState({
     //data: Store.getData()
   //});
  }
  render(){
    // return(
    //   <div>
    //     {this.state.data.map(function(f,i){
    //       return <li>{f} at index {i}</li>;
    //     })}
    //   <div>    
    // )
  }
};
//Inline CSS Styles(excludes hover)
var styles ={
  base:{

  }
}

module.exports = %NAME%;