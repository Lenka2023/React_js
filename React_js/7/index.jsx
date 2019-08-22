
var Check=React.createClass({
getInItialState:function{
      return{checked:true}
  },
handleCheck:function{
    this.setState({checked: !this.state.checked})
  },
  render: function(){
var message;
if(this.state.checked){
message='выбран';
else{
message='не выбран';
}
}
}
  return(
  <div >
    <input type="checkbox" ohChange={this.handleCheck} defaultChecked={this.state.checked} />}
  <p>Чекбокс{message}</p>
</div>
  );

});
const app=document.getElementById("program");
ReactDOM.render(<Check />, app);



    </script>
    <!--
      Note: this page is a great way to try React but it's not suitable for production.
      It slowly compiles JSX with Babel in the browser and uses a large development build of React.

      Read this section for a production-ready setup with JSX:
      http://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project

      In a larger project, you can use an integrated toolchain that includes JSX instead:
      http://reactjs.org/docs/create-a-new-react-app.html

      You can also use React without JSX, in which case you can remove Babel:
      https://reactjs.org/docs/react-without-jsx.html
    -->
  
