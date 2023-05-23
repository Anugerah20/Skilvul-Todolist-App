import {
  ADD_TODO_LIST,
  REMOVE_TODO_LIST,
  UPDATE_TODO_LIST,
} from "../actions/todoListAction";

const initialState = {
  todos: [],
};

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return {
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO_LIST:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case UPDATE_TODO_LIST:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoListReducer;
