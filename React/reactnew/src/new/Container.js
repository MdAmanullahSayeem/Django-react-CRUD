import React from "react"


class Container extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todoList:[],
			activeItem:{
				id:null,
				name:'',
				title:'',

			},
			editing:false,
		}
		this.fetchTask = this.fetchTask.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.getCookie = this.getCookie.bind(this)

	};

	getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

	componentWillMount(){
		this.fetchTask()
	}

	fetchTask(){
    console.log('Fetching...')

    fetch('http://127.0.0.1:8000/api/task-list/')
    .then(response => response.json())
    .then(data => 
      this.setState({
        todoList:data
      })
      )
  }

  handleChange(e){
  	var name=e.target.name
  	var value=e.target.value
  	console.log('Name:', name)
  	console.log('value:', value)

  	this.setState({
  		activeItem:{
  		...this.state.activeItem,
  		title:value
  	}
  	})

  }

  handleSubmit(e){
    e.preventDefault()
    console.log('ITEM:', this.state.activeItem)
    var csrftoken = this.getCookie('csrftoken')

    var url = 'http://127.0.0.1:8000/api/task-create/'

    if (this.state.editing==true){
    	url=`http://127.0.0.1:8000/api/task-update/${this.state.activeItem.id}/`
    	this.setState({
    		editing:false
    	})
    }


    fetch(url, {
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'X-CSRFToken':csrftoken,
      },
      body:JSON.stringify(this.state.activeItem)
    }).then((response)  => {
        this.fetchTask()
        this.setState({
           activeItem:{
          id:null, 
          name:'',
          title:'',
        }
        })
    }).catch(function(error){
      console.log('ERROR:', error)
    })

  }

  startEdit(task){
  	this.setState({
  		activeItem:task,
  		editing:true,
  	})
  }

  deleteItem(task){
  	var csrftoken= this.getCookie('csrftoken')
  	var url=`http://127.0.0.1:8000/api/task-delete/${task.id}/`
  	
  	fetch(url,{
  		method:'DELETE',
  		headers:{
  			'Content-type':'application/json',
  			'X-CSRFToken': csrftoken,
  		},

  	}).then ((response)=>{
  		this.fetchTask()
  	})

  }


	render(){
		var tasks= this.state.todoList
		var self=this
		return(
				<div className="container">
					<div id="task-container">
						<div id="form-wrapper">
							<form onSubmit={this.handleSubmit}  id="form">
                    			<div className="flex-wrapper">
                        			<div style={{flex: 6}}>
                            			<input onChange={this.handleChange}  className="form-control" id="title"  type="text" name="title" value={this.state.activeItem.title} placeholder="Add task.." />
                         			</div>

                         			<div style={{flex: 1}}>
			                    		<input id="submit" className="btn btn-warning" type="submit" name="Add" />
			                    	</div>
			                    </div>
			                </form>
						</div>

						<div className="list-wrapper">
							{tasks.map(function(task, index){
								return(
									<div key={index} className="task-wrapper flex-wrapper">
										<div style={{ felx:7}}>
											<span> {task.title}</span>
										</div>

										<div style={{ felx:1}}>
											<button onClick={()=>self.startEdit(task)} className="btn btn-sm btn-outline-info"> Edit </button>
										</div>

										<div style={{ felx:1}}>
											<button onClick={()=>self.deleteItem(task)} className="btn btn-sm btn-outline-dark-delete"> Delete </button>
										</div>

									</div>
									)

							})}
						</div>
					</div>

				</div>
			);
	}

}
export default Container