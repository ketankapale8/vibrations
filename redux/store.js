import { configureStore } from "@reduxjs/toolkit";
import { authReducer, messageReducer } from "./reducer.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
  },
});

export default store;