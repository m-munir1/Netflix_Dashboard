import axiosconfig from "../../config/axiosconfig";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";

export const loginCall = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosconfig.post("auth/adminlogin", user);
    res.data && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutCall = (dispatch) => {
  dispatch(logout());
};
