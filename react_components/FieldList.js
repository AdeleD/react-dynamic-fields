/** @jsx React.DOM */

var React = require("react");
var Field = require("./Field");


var FieldList = React.createClass({
  render: function() {
    var fields = this.props.fields.map(function (field) {
      return (
        <Field inputMarkup={field} />
      );
    });

    return (
      <div className="field-list field-input">
        {fields}
      </div>
    );
  }
});

module.exports = FieldList;
