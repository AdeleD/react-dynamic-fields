/** @jsx React.DOM */

var React = require("react");

var Field = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    var parentDiv = e.target.parentNode.parentNode;
    parentDiv.parentNode.removeChild(parentDiv);
  },
  render: function() {
    return (
      <div className="input-prepend">
        <div className="add-on">
          <span><i className="icon icon-link"></i></span>
        </div>
        <div className="add-item">
          <div dangerouslySetInnerHTML={{__html: this.props.inputMarkup}} />
        </div>
        <a href="" className="delete" onClick={this.handleClick}>
          <i className="icon icon-times"></i>
        </a>
      </div>
    );
  }
});

module.exports = Field;
