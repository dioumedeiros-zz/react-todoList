import React from "react";
import { render } from "@testing-library/react";

import { TodoContext } from "~/Components/TodoContext";
import Header from "~/Components/Header";

describe("Header component", () => {
  it("should be able to see infos", () => {
    const addItem = [jest.fn()];
    const { getByTestId } = render(
      <TodoContext.Provider value={[addItem]}>
        <Header />
      </TodoContext.Provider>
    );

    expect(getByTestId("tasks")).toBeTruthy();
    expect(getByTestId("tasks-done")).toBeTruthy();
    expect(getByTestId("tasks-not-done")).toBeTruthy();
  });
});
