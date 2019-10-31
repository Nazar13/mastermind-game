import { call, put } from "redux-saga/effects";
import * as types from "./../actions/actionsList.js";
import { loginUserService } from "./../services/authenticationService.js";

export function* loginUser(payload){
  console.log(payload.payload);
  console.log("check login");
  try {
    
    const response = yield call(loginUserService, payload.payload);
    console.log("success");
    console.log(response);
        yield put({ type: types.LOGIN_USER_SUCCESS, response});
      } catch(error) {
        console.log(error);

        yield put({ type: types.LOGIN_USER_ERROR, error })
      }
}