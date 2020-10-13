import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {
	state={
		todos:[
		{
			id:1,
			tittle:"title 1",
			complete:true
		},
		{

			id:2,
			tittle:"title 2",
			complete:false
		}

		]
	};

addTodoItem = title=>{
	const newTodo={
		id:4,
		title:title,
		complete:false

	};
	this.setState({
		todos:[...this.state.todos,newTodo]

	});

};
delTodo = id => {
  this.setState({
  	todos:[
  	...this.state.todos.filter(todo=>{
  		return todo.id !== id;

  	 })

  	]

  });
};

handleChange = (id) => {
  this.setState({
  	todos: this.state.todos.map( todo=>{
  		if (todo.id === id){
  			todo.complete = !todo.complete;
  		}
  		return todo;
  	})
  });
};

  render() {
    return (

    	<div className="container">
    		<Header/>
    		<InputTodo addTodoProps={this.addTodoItem}/>
    		<TodoList
    		 todo={this.state.todos}
    		  handleChangeProps={this.handleChange}
    		  deleteTodoProps={this.delTodo}
    		/>
    	</div>
    );
  }
}
export default TodoContainer