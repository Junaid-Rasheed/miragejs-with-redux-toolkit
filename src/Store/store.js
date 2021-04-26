import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";


// wherever we use term default export we can use any name of such file where we are importing 
//like we use word couterReducer instead of it if we use xyz it will also work 
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
