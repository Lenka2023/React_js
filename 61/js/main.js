var Task=React.createClass({
  edit:function(){
    alert("редактировать");
  },
  remove:function(){
    alert("удалить");
  },
  render: function(){

  return(
  <div className="box">
    <div className="text">{this.props.children}</div>
  <button onClick={this.edit} > Редактировать</button>
	<button onClick={this.remove} > Удалить</button>
</div>
  );
}
});
const app=document.getElementById("program");
ReactDOM.render(
<div >
  <Task>Task number 1</Task>
  <Task>Task number 2</Task>
  <Task>Task number 3</Task>
</div>,
 document.getElementById("program"));