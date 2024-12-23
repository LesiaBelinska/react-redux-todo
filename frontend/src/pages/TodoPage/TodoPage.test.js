import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "../../store/slices/todoSlicer.js";
import TodoPage from "./TodoPage.jsx";

describe("TodoPage tests", () => { 
    const testStore = configureStore({
      reducer: {
        todos: todosReducer,
      },
      preloadedState: {
        todos: {
          todos: [{ id: "1", text: "New Todo", status: false }],
          isLoading: false,
        },
      },
    });

    test('1. render the title', () => {
    render(
      <Provider store={testStore}>
        <TodoPage />
      </Provider>
    );

    const titleElement = screen.getByText("To-Do List");

    expect(titleElement).toBeInTheDocument();
    });

    test("2. Should render input and button", () => {
      render(
        <Provider store={testStore}>
          <TodoPage />
        </Provider>
      );

      const inputElement = screen.getByRole("textbox");
      const buttonElement = screen.getByText("add todo");

      expect(inputElement).toBeInTheDocument();
      expect(buttonElement).toBeInTheDocument();
    });
    
    test("3. can use letters and numbers", () => {
      render(
        <Provider store={testStore}>
          <TodoPage />
        </Provider>
      );

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "Test123" } });

      expect(input.value).toBe("Test123");
    });

// test("4. create new Todo", () => {
  

//   render(
//     <Provider store={testStore}>
//       <TodoPage />
//     </Provider>
//   );

//   const input = screen.getByRole("textbox");
//   fireEvent.change(input, { target: { value: "New Todo" } });

//   const addButton = screen.getByText("add todo");
//   fireEvent.click(addButton);

//   const newItem = screen.getByText("New Todo");
//   expect(newItem).toBeInTheDocument();
// });
    

})


