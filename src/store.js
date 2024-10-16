import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./utils/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
