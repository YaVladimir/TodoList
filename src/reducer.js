import { combineReducers } from "redux";
import filtersReducer from "./feature/filter/filterSlice";
import todosReducer from "./feature/todos/todosSlice";

const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build simething fun!", completed: false, color: "blue" }
  ],
  filters: {
    status: "All",
    color: []
  }
};

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
});

export default rootReducer;
