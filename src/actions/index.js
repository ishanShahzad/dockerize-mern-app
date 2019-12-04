export const onInputChange = e => {
  console.log(e.target.value);
  return {
    type: "INPUT_CHANGE",
    payload: e.target.value
  };
};

export const addtask = () => {
  return {
    type: "ADD_TASK"
  };
};

export const deleteTask = index => {
  return {
    type: "DELETE_TASK",
    payload: index
  };
};
