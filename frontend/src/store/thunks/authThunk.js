import { loginSuccess, logoutSuccess } from "../slices/authSlicer.js";

export const loginThunk = () => (dispatch) => {
  dispatch(loginSuccess());
};

export const logoutThunk = () => (dispatch) => {
  dispatch(logoutSuccess());
};
