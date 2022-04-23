import { takeLatest, put, call, all } from "@redux-saga/core/effects";
import userActionTypes from "./user.types";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import { getDoc } from "firebase/firestore";
import { signInSuccess, signInFailure } from "./user.actions";

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield getDoc(userRef);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithGoogle() {
  console.log("hellloo");
  try {
    const { user } = yield signInWithPopup(auth, googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithEmail({ payload }) {
  try {
    const { email, password } = payload;
    const { user } = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password
    );
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoolgeSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onGoolgeSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
  ]);
}
