# React Flux Starter Kit
If you are like me, a starter kit should have a folder structure imposed, common UI Libraries, generators, and a dependable server all out of the box. This kit attempts to do that.

## Built In Services
* [BrowserSync](http://www.browsersync.io/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [JQuery](https://jquery.com/)
* [JQuery-UI](https://jqueryui.com/)
* [Webkit](http://webpack.github.io/)
* [NPM](https://www.npmjs.com/)

##Installation
1. npm install -g react-flux-starter-kit 
    this will install a command called mtn 
2. Navigate to a directory where you would like a new project to reside and run
```bash
mtn dew project [project_name]   (projects folder name)
```
3. Once it is complete run :
```bash
npm install -g webpack
npm install
```
4. Then start the server with:
```bash
mtn s
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
├── public
│   ├── assets
│   │   └── images
│   │       └── mtn.png (used on starter page)
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
├── package.json
└── webpack.config.js
```


