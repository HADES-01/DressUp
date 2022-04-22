import ShopActionsTypes from "./shop.types";
import { collection, getDocs } from "firebase/firestore";
import {
  firestore,
  collectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionsRef = collection(firestore, "collections");
    dispatch(fetchCollectionsStart());
    getDocs(collectionsRef)
      .then(async (snapshot) => {
        const collectionsMap = collectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
