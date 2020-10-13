import React from "react"
import TodoItem from "./TodoItem"
class TodoList extends React.Component {
	render(){
		return(
			<div>
			    {this.props.todo.map(data=>(
			    < TodoItem
			     key={data.id}
			     todo={data} 
			     handleChangeProps={this.props.handleChangeProps} 
			     deleteTodoProps={this.props.deleteTodoProps}
			     />))}

			</div>
			)
	}

}
export default TodoList