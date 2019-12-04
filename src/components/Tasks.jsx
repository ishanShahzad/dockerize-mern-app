import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../actions";

const TaskList = props => {
  console.log(props);
  return (
    <React.Fragment>
      <h3 className="mt-3">Tasks</h3>
      <div className="row">
        {props.list.map((task, i) => {
          return (
            <div className="col-12 border border-1 p-2" key={i}>
              <div className="row">
                <div className="col-5">
                  <b>{task}</b>
                </div>
                <div className="col-7">
                  <button
                    className="btn-danger btn-sm"
                    onClick={() => props.deleteTask(i)}
                  >
                    delete
                  </button>
                  <button className="btn-primary btn-sm">Edit</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    list: state.list
  };
};
export default connect(
  mapStateToProps,
  { deleteTask }
)(TaskList);
