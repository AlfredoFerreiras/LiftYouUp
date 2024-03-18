import {
  createAuthUserWithEmailAndPassword,
  signInWithEmailAndPasswordUser,
  signOutUser,
  onAuthUserStateChanged,
} from "./firebase";
import history from "../history";

// Action Types
const SET_AUTH = "SET_AUTH";
const AUTH_ERROR = "AUTH_ERROR"; // Added for handling authentication errors

// Action Creators
const setAuth = (auth) => ({ type: SET_AUTH, auth });
const setAuthError = (error) => ({ type: AUTH_ERROR, error }); // For handling auth errors

// Thunk Creators

// Observe auth state changes and dispatch setAuth action accordingly
export const observeAuthState = () => (dispatch) => {
  onAuthUserStateChanged((user) => {
    if (user) {
      // User is signed in
      const userProfile = { uid: user.uid, email: user.email };
      dispatch(setAuth({ isAuthenticated: true, user: userProfile }));
    } else {
      // User is signed out
      dispatch(setAuth({ isAuthenticated: false, user: null }));
    }
  });
};

// Authenticate user
export const authenticate = (email, password, method) => async (dispatch) => {
  try {
    await (method === "signup"
      ? createAuthUserWithEmailAndPassword(email, password)
      : signInWithEmailAndPasswordUser(email, password));

    // The state will be updated by observeAuthState listener when the authentication state changes
    history.push("/home"); // Assuming you have a 'home' route to redirect after authentication
  } catch (error) {
    console.error("Authentication error:", error);
    dispatch(setAuthError(error.message));
  }
};

// Logout user
export const logout = () => async (dispatch) => {
  try {
    await signOutUser();
    history.push("/login"); // Redirect to login after sign out
  } catch (error) {
    console.error("Sign out error:", error);
    dispatch(setAuthError(error.message));
  }
};

// Auth Reducer
export default function authReducer(
  state = { isAuthenticated: false, user: null, error: null },
  action
) {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, ...action.auth, error: null }; // Update auth state and clear any errors
    case AUTH_ERROR:
      return { ...state, error: action.error }; // Update state with auth error
    default:
      return state;
  }
}
