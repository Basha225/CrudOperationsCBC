import { Component } from "react";
class CrudOperation extends Component{
    constructor(){
        super()
        this.state = {
            taskname : "",
            description :"",
            assign : "",
            tasks : []
        }
    }

    handleChange = (a) =>{
        const {name , value} = a.target;
        this.setState({[name] : value});
    }

    handleSubmit = (a) => {

        a.preventDefault();

        // console.log("clicked")
        const {taskname , description , assign} = this.state;
        this.setState({tasks : [...this.state.tasks , {taskname , description , assign}]})
        // console.log(this.state.tasks)
    }

    handleDelete = (id) => {
        const deletedItems = this.state.tasks.filter((user, index)=> index != id )
        this.setState({tasks : deletedItems})

    }
    render(){
        return (
            <>
                <h1>Task Management System</h1>

                <form onSubmit={this.handleSubmit} style={{display : "flex" , gap : "1opx"}}>
                <label htmlFor="taskname">Task Name</label>
                <input type="text" placeholder="Enter Task Name" id="taskname"  name="taskname" onChange={this.handleChange}/>
                <br />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" placeholder="Enter Task Description"  onChange={this.handleChange}/>
                <br />
                <label htmlFor="assign">Assign</label>
                <select name="assign" id="assign" onChange={this.handleChange}>
                    <option value="">---</option>
                    <option value={"sandy"}>Sandy</option>
                    <option value={"anil"}>Anil</option>
                    <option value={"vinay"}>Vinay</option>
                </select>
                <br />
                <button type="submit">Add Task</button>
                </form>

                <br />

                {/* <h1>{this.state.taskname}</h1> */}
                <div className="cards-container">
                    {
                        this.state.tasks && this.state.tasks.map((task , index) => (
                            
                            <div className="card" key={index} style={{backgroundColor : "yellow" , display : "flex" , flexDirection : "row" , gap : "10px"}}>
                                <div>
                                    <h1>Assign to {task.assign}</h1>
                                </div>
                                <div>
                                    <h2>Task : {task.taskname}</h2>
                                    <p>Description : {task.description}</p>
                                </div>
                                <div>
                                    <button>Edit</button>
                                    <button onClick={() => this.handleDelete(index) }>Delete</button>
                                </div>
                            </div>
                        )) 
                    }
                </div>
            </>
        )
    }
}

export default CrudOperation;