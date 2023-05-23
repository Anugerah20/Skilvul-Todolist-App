export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const REMOVE_TODO_LIST = "REMOVE_TODO_LIST";
export const EDIT_TODO_LIST = "EDIT_TODO_LIST";
export const UPDATE_CHECKBOX = "UPDATE_CHECKBOX";

export const addTodoList = (newTodoList) => {
  return {
    type: ADD_TODO_LIST,
    payload: newTodoList,
  };
};

export const removeTodoList = (todo) => {
  return {
    type: REMOVE_TODO_LIST,
    payload: todo,
  };
};

// export const updateTodoList = (payload) => {
//   return {
//     type: EDIT_TODO_LIST,
//     payload,
//   };
// };

export const editTodoList = (todo) => {
  return {
    type: EDIT_TODO_LIST,
    payload: todo,
  };
};
