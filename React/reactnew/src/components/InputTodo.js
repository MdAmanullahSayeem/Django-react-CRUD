import React, { Component } from "react"

class InputTodo extends Component {

	state = {
		title:"jhkkh"
	};

	handleSubmit= e =>{
		e.preventDefault();
		this.props.addTodoProps(this.state.title);
		this.setState({
			title:""

		});
	};

	onChange= e => {
		this.setState({
			title: e.target.value
		});
	};
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" className="input-text" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange}/>
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    )
  }
}
export default InputTodo