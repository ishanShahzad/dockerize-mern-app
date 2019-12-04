import React from "react";
import { connect } from "react-redux";
import { onInputChange, addtask } from "../actions";

const AddTask = props => {
  console.log(props);
  return (
    <React.Fragment>
      <input
        type="text"
        name="task"
        value={props.value}
        onChange={props.onInputChange}
      />
      <button className="btn-primary" onClick={props.addtask}>
        Add Task
      </button>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    value: state.newtask
  };
};
export default connect(
  mapStateToProps,
  { addtask, onInputChange }
)(AddTask);
