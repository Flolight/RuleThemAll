import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user";

export default configureStore({
    reducer: {
        user: userReducer
    }
})