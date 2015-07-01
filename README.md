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
TODO: Publish to NPM

Currently do:

1. Clone the repo and run npm install.
```bash
npm install
```
2. If you want the generator install it by running: 
```bash
bash lib/mtn install
```
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
│   ├── api
│   ├── components
│   ├── constants
│   ├── dispatchers
│   ├── stores
│   └── main.js
├── docs
├── lib
│   ├── actions_template.js
│   ├── closer.js
│   ├── component_template.js
│   ├── constants_template.js
│   ├── dispatcher_template.js
│   ├── mtn
│   └── stores_template.js
├── node_modules(generated through npm install)
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
│   │       └── react.min.js
│   └── index.html
├── README.md
├── gulpfile.js
└── package.json
```

Closer.js describe!
react bootstrap imports file

