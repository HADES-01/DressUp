import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isUserLoading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGN_IN_START:
    case userActionTypes.EMAIL_SIGN_IN_START:
    case userActionTypes.SIGN_UP_START:
      return {
        ...state,
        error: null,
        isUserLoading: true,
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isUserLoading: false,
      };  
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        isUserLoading: false,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isUserLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
