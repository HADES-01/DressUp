import ShopActionsTypes from "./shop.types";
import { takeLatest, call, put } from "@redux-saga/core/effects";
import { collection, getDocs } from "firebase/firestore";
import {
  firestore,
  collectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = collection(firestore, "collections");
    const snapshot = yield getDocs(collectionsRef);
    yield console.log(snapshot);
    const collectionsMap = yield call(collectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
