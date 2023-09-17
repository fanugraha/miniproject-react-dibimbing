import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../slice/LoginSlice";
import RegisterReducer from "../slice/RegisterSlice";
import UserReducer from "../slice/UserSlice";

const store = configureStore({
  reducer: {
    login: LoginReducer,
    register: RegisterReducer,
    user: UserReducer,
  },
});

export default store;
