import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  cart: cartReducer,
  auth: authReducer,
})