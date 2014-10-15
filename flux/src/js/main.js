/**
 * @jsx React.DOM
 */

 window.App = require('./components/app');
 window.React = require('react');

 window.React.renderComponent(
    window.App(),
    document.getElementById('main'));
