import React from "react";

import TodoList from "./Components/TodoList";
import { TodoProvider } from "./Components/TodoContext";

import "./styles/global.css";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
