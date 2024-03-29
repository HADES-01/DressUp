import ShopActionsTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  error: undefined,
};

const shopReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ShopActionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: actions.payload,
      };
    case ShopActionsTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: actions.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
