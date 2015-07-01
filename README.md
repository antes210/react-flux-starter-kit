# React Flux Starter Kit
If you are like me, a starter kit should have a folder structure imposed, common UI Libraries, generators, and a dependable server all out of the box. This kit attempts to do that.

## Built In Services
* [BrowserSync](http://www.browsersync.io/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Radium](http://projects.formidablelabs.com/radium/)
* [JQuery](https://jquery.com/)
* [JQuery-UI](https://jqueryui.com/)
* [Gulp](http://gulpjs.com/)
* [NPM](https://www.npmjs.com/)

##Installation
1. npm install react-flux-starter-kit for every project you want to create
This will install to the current folder but without an node-modules folder.
2. Run npm install to get the rest of the modules
3. Start the Server by running:
```bash
gulp
#default task on gulp start the server
gulp server
#or if you want the js to be minified
gulp server:minified
```

## File Structure
```
├── app
│   ├── actions
│   ├── components
│   │   └── app.js
│   ├── constants
│   ├── dispatchers
│   ├── stores
│   ├── main.js
│   └── router.js
├── docs
├── lib
│   ├── actions_template.js
│   ├── closer.js
│   ├── component_template.js
│   ├── constants_template.js
│   ├── convert.js
│   ├── dispatcher_template.js
│   ├── mtn
│   ├── router_template.js
│   └── stores_template.js
├── public
│   ├── assets
│   ├── js
│   │   └── main.js
│   ├── vendor
│   │   ├── css
│   │   │   ├── bootstrap.min.css
│   │   │   └── jquery-ui.css
│   │   └── js
│   │       ├── bootstrap.min.js
│   │       ├── imports.js
│   │       ├── jquery-ui.min.js
│   │       ├── jquery.min.js
│   │       ├── radium.min.js
│   │       ├── react-bootstrap.min.js
│   │       ├── react.js
│   │       └── react.min.js
│   └── index.html
├── gulpfile.js
└── package.json
```

TODO:
Closer.js describe
react bootstrap imports file

