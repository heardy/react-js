/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions.js');

var AddtoCart = React.createClass({
    handleClick: function () {
        AppActions.addItem(this.props.item);
    },
    render: function () {
        return (
            <button onClick={this.handleClick}>Add To Cart</button>
        );
    }
});

module.exports = AddtoCart;
