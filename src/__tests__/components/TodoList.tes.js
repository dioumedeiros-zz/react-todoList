import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import { TodoContext } from "~/Components/TodoContext";
import TodoList from "~/Components/TodoList";

describe("TodoList component", () => {
  it("should render component", () => {
    const todoList = [jest.fn()];
    const setTodoList = jest.fn();
    const { getByTestId } = render(
      <TodoContext.Provider value={[todoList, setTodoList]}>
        <Router>
          <TodoList />
        </Router>
      </TodoContext.Provider>
    );

    expect(getByTestId("data-grid")).toBeTruthy();
    expect(getByTestId("data-header")).toBeTruthy();
    expect(getByTestId("data-items")).toBeTruthy();
  });
});
