import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import { TodoContext } from "~/Components/TodoContext";
import List from "~/pages/Todo/List";

describe("TodoList component", () => {
  it("should render component", () => {
    const todoList = [jest.fn()];
    const setTodoList = jest.fn();
    const { getByTestId } = render(
      <TodoContext.Provider value={[todoList, setTodoList]}>
        <Router>
          <List />
        </Router>
      </TodoContext.Provider>
    );

    expect(getByTestId("data-select")).toBeTruthy();
    expect(getByTestId("data-link")).toBeTruthy();
  });
});
