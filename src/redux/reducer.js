import { combineReducers } from "redux";
import { userSlice } from "./userSlice";

export const rootreducer = combineReducers({
    user: userSlice.reducer,
})