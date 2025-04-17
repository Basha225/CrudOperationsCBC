import { Component } from "react";
import "../App.css"

class CrudOperationEdit extends Component {
  constructor() {
    super();
    this.state = {
      taskname: "",
      description: "",
      assignTo: "",
      tasks: [],
      editingTask: null //0
    };
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleAdd = (e) => {
    e.preventDefault();
    if (this.state.editingTask !== null) {
      // Update existing task
      const updatedTasks = [...this.state.tasks];
      updatedTasks[this.state.editingTask] = {
        taskname: this.state.taskname,
        description: this.state.description,
        assignTo: this.state.assignTo,
        id: updatedTasks[this.state.editingTask].id
      };
      
      this.setState({
        tasks: updatedTasks,
        taskname: "",
        description: "",
        assignTo: "",
        editingTask: null
      });
    } else {
      // Add new task
      const newTask = {
        taskname: this.state.taskname,
        description: this.state.description,
        assignTo: this.state.assignTo,
        id: Date.now()
      };
      
      this.setState({
        tasks: [...this.state.tasks, newTask],
        taskname: "",
        description: "",
        assignTo: ""
      });
    }
  }

  handleDelete = (id) => {
    const deletedTasks = this.state.tasks.filter((task, index) => index !== id);
    this.setState({ tasks: deletedTasks });
  }
  
  handleEdit = (index) => {
    const taskToEdit = this.state.tasks[index];
    this.setState({
      taskname: taskToEdit.taskname,
      description: taskToEdit.description,
      assignTo: taskToEdit.assignTo,
      editingTask: index
    });
  }
  
  render() {
    return (
      <div>
        {/* Left Side - Form */}
        <div>
          <h1>Task Management System</h1>
          
          <form onSubmit={this.handleAdd}>
            <h2 style={{marginTop: 0, color: "#495057"}}>
              {this.state.editingTask !== null ? "Edit Task" : "Add New Task"}
            </h2>
            
            <div>
              <label htmlFor="taskname">Task Name:</label>
              <input 
                type="text" 
                placeholder="Enter task name" 
                id="taskname" 
                name="taskname" 
                value={this.state.taskname}
                onChange={this.handleChange}
                required 
              />
            </div>
            
            <div>
              <label htmlFor="description">Description:</label>
              <textarea 
                placeholder="Enter description" 
                id="description" 
                name="description" 
                value={this.state.description}
                onChange={this.handleChange} 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="assignTo">Assign To:</label>
              <select 
                id="assignTo" 
                name="assignTo" 
                value={this.state.assignTo}
                onChange={this.handleChange} 
                required
              >
                <option value="">Select</option>
                <option value="chaitanya">Chaitanya</option>
                <option value="harish">Harish</option>
                <option value="hemanth">Hemanth</option>
                <option value="Sai Teja">Sai Teja</option>
              </select>
            </div>
            
            <button type="submit">
              {this.state.editingTask !== null ? "Update Task" : "Add Task"}
            </button>
          </form>
        </div>
        
        {/* Right Side - Tasks */}
        <div>
          <h1>Your Tasks</h1>
          
          {this.state.tasks.length === 0 ? (
            <div style={{textAlign: "center", color: "#6c757d", marginTop: "50px"}}>
              <p>No tasks added yet. Use the form to create a new task.</p>
            </div>
          ) : (
            <div>
              {this.state.tasks.map((task, index) => (
                <div key={task.id || index}>
                  <div>
                    <h2>Assigned To: {task.assignTo}</h2>
                  </div>
                  <div>
                    <h3 >Task: {task.taskname}</h3>
                    <p >Description: {task.description}</p>
                  </div>
                  <div>
                    <button 
                      onClick={() => this.handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => this.handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CrudOperationEdit;