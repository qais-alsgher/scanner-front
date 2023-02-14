import axios from "axios";

import {
  authRequest,
  authFail,
  loginSuccess,
  signupSuccess,
  logoutSuccess,
} from "../features/authSlicer";
import base64 from "base-64";
import { toast } from "react-toastify";

export const login = (dispatch, payload) => {
  payload.preventDefault();
  console.log("in login action");
  console.log(payload.target.email.value);
  const user = {
    email: payload.target.email.value,
    password: payload.target.password.value,
  };
  const encodedUser = base64.encode(`${user.email}:${user.password}`);

  try {
    if (payload.error) {
      dispatch(authFail(payload.error));
    } else {
      dispatch(authRequest());
      axios
        .post(
          "http://localhost:8080/login",
          {},
          {
            headers: {
              Authorization: `Basic ${encodedUser}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          dispatch(loginSuccess(res.data));
          toast.success(`Welcome ${res.data.name} to scanner`);
        })
        .catch((err) => {
          console.log(err.response.data);
          dispatch(authFail(err.response.data));
          toast.error(err.response.data);
        });
    }
  } catch (err) {
    dispatch(authFail(err.response.data));
    toast.error(err.response.data);
  }
};
