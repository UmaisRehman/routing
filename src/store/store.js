import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";  // Use default import for the reducer

export const store = configureStore({
  reducer: {
    todo: todoReducer  // The key should be "todo" to match the slice name, but you can adjust this based on your design
  }
});
