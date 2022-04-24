import { takeLatest, all, call } from "redux-saga/effects";
import cartActionTypes from "./cart.types";

export function* addItemToUser() {

}

export function* onAddItem() {
  yield takeLatest(cartActionTypes.ADD_ITEM, addItemToUser);
}

export function* cartSagas() {
  yield all([call(onAddItem)]);
}
