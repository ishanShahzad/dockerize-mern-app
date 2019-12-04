import React, { Component } from "react";
import { connect } from "react-redux";
import AddTask from "./AddTask";
import TaskList from "./Tasks";
import axios from "axios";
class App extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/user")
      .then(res => console.log(res.data));
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>My ToDo List</h1>

          <div className="card">
            <div className="card-body">
              <AddTask />
              <br />
              <TaskList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
