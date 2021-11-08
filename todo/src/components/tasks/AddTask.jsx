import React, { Component } from "react";
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";

class AddTask extends Component {
  state = {
    task: "",
    checked: "false",
  };

  handleChange = (e) => {
    // this.setState({ email: e.target.value });
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    document.getElementById("addTaskForm").reset();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div className="px-4 mx-auto">
          <form className="container" id="addTaskForm" autoComplete="off" onSubmit={this.handleOnSubmit}>
            <div className="mb-3">
              <label htmlFor="task" className="form-label">
                Add a task
              </label>
              <input type="text" className="form-control" id="task" onBlur={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
