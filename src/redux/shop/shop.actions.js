import ShopActionsTypes from "./shop.types";


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
