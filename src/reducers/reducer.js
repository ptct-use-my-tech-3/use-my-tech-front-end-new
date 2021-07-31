import { combineReducers } from "redux"
import { loginReducer } from "./loginReducer"
import { signupReducer } from "./signupReducer"
import { listingReducer } from "./listingReducer";

const rootReducer = combineReducers({ signupReducer, loginReducer,listingReducer });

export default rootReducer;