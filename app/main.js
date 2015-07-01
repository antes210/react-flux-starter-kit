var App = require('./components/app');
require('./router.js');
React.render (
    <App id="app"/>,
  document.getElementById('main')
);
Router.init();
