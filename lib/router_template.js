global.Router = require('future-router').Router;
// Mount Components Here do NOT initially mount them in a component as components can only be unmounted
// in the same place they were mounted in. 
//You can trigger a route through 2 ways:
// 1. an href: href={Router.route("route",{args:"any args"})} *args must should be an object that
// will be converted to uri parameters. You can also generate it manually as Router.route generates:
// #/route?args=any args&etc=etc
// 2. Dynamically: 'Router.route('route_name',data,true);' true signifies it should execute it immediately
Router.Routes = {
  default: function(args){
    //var <name> = require('./components/<name>.js');    
    //var <mount_node> = document.getElementById('<mount_node>');
    //React.unmountComponentAtNode(document.getElementById('<mount_node>'));
    //React.render(<name>, document.getElementById('<mount_node>')); 
  },
  root: function(args){
    //var <name> = require('./components/<name>.js');    
    //var <mount_node> = document.getElementById('<mount_node>');
    //React.unmountComponentAtNode(document.getElementById('<mount_node>'));
    //React.render(<name>, document.getElementById('<mount_node>')); 
  }
};
