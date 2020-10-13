import React from "react"
class TodoItem extends React.Component {
	render(){
		const completedStyle = {
		  fontStyle: "italic",
		  color: "#d35e0f",
		  opacity: 0.4,
		  textDecoration: "line-through",
		}
		
			return (
				<li className="todo-item">
					<input type="checkbox" 
						checked={this.props.todo.complete}
						onChange={() => this.props.handleChangeProps(this.props.todo.id)} 
					/>
					 {this.props.todo.id}
					 {this.props.todo.tittle}
					 <button onClick={()=> this.props.deleteTodoProps(this.props.todo.id)}> 
					  delete
					 </button>

					 <span style={this.props.todo.complete ? completedStyle : null}>
					 	{this.props.todo.tittle}
					 </span>
				 </li>
			);
	}

}
export default TodoItem