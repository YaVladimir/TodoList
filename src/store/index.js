import { applyMiddleware, createStore } from "redux";
import { print1, print2, print3 } from "./../exampleAddons/middleware";
import rootReducer from "./../reducer";

let preloadedState;
const persistedTodosString = localStorage.getItem("todos");

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  };
}

const combinedMiddleware = applyMiddleware(print1, print2, print3);

const store = createStore(rootReducer, preloadedState);

export default store;
