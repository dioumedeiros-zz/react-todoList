import React from "react";

import TodoList from "./Components/TodoList";
import { TodoProvider } from "./Components/TodoContext";

import "./styles/global.css";

import List from "../src/pages/Users/List";

function App() {
  return (
<<<<<<< HEAD
    <TodoProvider>
      <div className="App">
        <TodoList />
      </div>
    </TodoProvider>
=======
    <div className="App">
      <List />
    </div>
>>>>>>> dbaea5e3c897a6c63bdfa4170afebc7cb445c5f0
  );
}

export default App;
