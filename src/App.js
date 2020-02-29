import React from "react";

import TodoList from "./Components/TodoList";
import { TodoProvider } from "./Components/TodoContext";

import "./styles/global.css";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
