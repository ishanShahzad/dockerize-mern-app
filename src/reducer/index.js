const initialState = {
  newtask: "",
  list: []
};

export default (state = initialState, actions) => {
  if (actions.type == "INPUT_CHANGE")
    return { ...state, newtask: actions.payload };
  if (actions.type == "ADD_TASK")
    return { ...state, list: [...state.list, state.newtask], newtask: "" };
  if (actions.type == "DELETE_TASK") {
    let list = [...state.list];
    list.splice(actions.payload, 1);
    return { ...state, list };
  }
  return state;
};
