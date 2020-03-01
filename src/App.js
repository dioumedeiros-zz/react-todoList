import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import history from "./services/history";
import { TodoProvider } from "./Components/TodoContext";

import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <Router history={history}>
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </TodoProvider>
  );
}

export default App;
