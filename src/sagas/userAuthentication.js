import { call, put } from "redux-saga/effects";
import * as types from "./../actions/actionsList.js";
import { loginUserService } from "./../services/authenticationService.js";

export function* loginUser(payload){
    const response = yield call(loginUserService, payload.payload);
    let checkUser = response.filter((user) => user.username === payload.payload.username);
    if(checkUser) {
      localStorage.setItem("authToken", true);
      yield put({ type: types.LOGIN_USER_SUCCESS, response});
    } else {
      const auth_error = "auth_error";
      yield put({ type: types.LOGIN_USER_ERROR, auth_error })
    }
}
