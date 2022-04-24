import { takeLatest, all, call } from "redux-saga/effects";
import cartActionTypes from "./cart.types";

export function* clearCart() {
  
}

export function* onClearCart() {
  yield takeLatest(cartActionTypes.CLEAR_CART, clearCart);
}

export function* cartSagas() {
  yield all([call(onClearCart)]);
}
