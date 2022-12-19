import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "src/redux/counterSlice";
import darkModeReducer from "src/redux/darkModeSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    counter: counterReducer,
  },
});
