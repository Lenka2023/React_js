console.log("123");
var React = require('react');
  var ReactDOM = require('react-dom');
      var createReactClass = require('create-react-class');
var Block = React.createClass ({
  render:function () {
    return (<h3> Lena </h3>);
  }
});

      ReactDOM.render(
        <Block/>,
        document.getElementById("example")
      );
