//var App = require('./components/app');
//var React = require('react');

React.render (

    <Row className='show-grid'>
      <Row>
      <Col md={12}>
        <Jumbotron className="text-center"><h1>React-Flux Starter Project</h1></Jumbotron>
         generator browsersync
        <div> Run `bash lib/mtn install` </div>
      </Col>
      </Row>
      <Row>
        <Col md={3} className="text-center well">
          ReactBootstrap
        </Col>
        <Col md={3} className="text-center well">
          Jquery
        </Col>
        <Col md={3} className="text-center well">
          JqueryUI
        </Col>
        <Col md={3} className="text-center well">
          Radium
        </Col>
      </Row>
    </Row>
,
  document.getElementById('main')
);
