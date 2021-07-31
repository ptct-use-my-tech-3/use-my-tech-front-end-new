import { combineReducers } from "redux"
import { loginReducer } from "./loginReducer"
import { signupReducer } from "./signupReducer"
import { listingReducer } from "./listingReducer";
import { renterReducer } from "./renterReducer";

const rootReducer = combineReducers({ signupReducer, loginReducer,listingReducer,renterReducer });

export default rootReducer;