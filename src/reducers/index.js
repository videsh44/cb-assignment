import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobReducer from "./jobReducer";

export default combineReducers({
  userAuth: authReducer,
  jobData: jobReducer,
});
