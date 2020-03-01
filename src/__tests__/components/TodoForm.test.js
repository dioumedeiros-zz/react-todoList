import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { TodoContext } from "~/Components/TodoContext";
import TodoForm from "~/Components/TodoForm";

describe("TodoForm component", () => {
  it("should render component", () => {
    const todoList = [jest.fn()];
    const setTodoList = jest.fn();
    const { getByTestId, getByLabelText } = render(
      <TodoContext.Provider value={[todoList, setTodoList]}>
        <TodoForm />
      </TodoContext.Provider>
    );

    fireEvent.change(getByLabelText("task"), { target: { value: "New Task" } });
    fireEvent.submit(getByTestId("form"));

    expect(getByTestId("form")).toBeTruthy();
    expect(getByTestId("input-task")).toBeTruthy();
    expect(getByTestId("input-check")).toBeTruthy();
  });
});
