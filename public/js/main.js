(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var App = require('./components/app');
//var React = require('react');

React.render (

    React.createElement(Row, {className: "show-grid"}, 
      React.createElement(Row, null, 
      React.createElement(Col, {md: 12}, 
        React.createElement(Jumbotron, {className: "text-center"}, React.createElement("h1", null, "React-Flux Starter Project")), 
         "generator browsersync", 
        React.createElement("div", null, " Run `bash lib/mtn install` ")
      )
      ), 
      React.createElement(Row, null, 
        React.createElement(Col, {md: 3, className: "text-center well"}, 
          "ReactBootstrap"
        ), 
        React.createElement(Col, {md: 3, className: "text-center well"}, 
          "Jquery"
        ), 
        React.createElement(Col, {md: 3, className: "text-center well"}, 
          "JqueryUI"
        ), 
        React.createElement(Col, {md: 3, className: "text-center well"}, 
          "Radium"
        )
      )
    )
,
  document.getElementById('main')
);

},{}]},{},[1]);
