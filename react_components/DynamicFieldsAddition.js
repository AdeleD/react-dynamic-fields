/** @jsx React.DOM */

var React = require("react");
var FieldList = require("./FieldList");


var DynamicFieldsAddition = React.createClass({
  getInitialState: function() {
    return {fields: []};
  },
  componentDidMount: function() {
    this.setState({fields: this.props.fields});
  },
  handleClick: function(e) {
    e.preventDefault();
    var fields = this.state.fields;

    var newFields = fields.concat([this.props.newField.outerHTML]);
    this.setState({fields: newFields});
  },
  render: function() {
    return (
      <div className="container">
        <FieldList fields={this.state.fields} />
        <a href="" className="bonus-field add" onClick={this.handleClick}>
          <i className="icon icon-plus"></i>
          {this.props.actionName}
        </a>
      </div>
    );
  }
});

module.exports = DynamicFieldsAddition;
