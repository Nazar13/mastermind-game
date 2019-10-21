import { call, put } from "redux-saga/effects";
import * as types from "./../actions/actionsList.js";
import { loginUserService } from "./../services/authenticationService.js";

export function* loginUser(payload){
    try {
        const response = yield call(loginUserService, payload);
        yield [
          put({ type: types.LOGIN_USER_SUCCESS, response })
        ];
      } catch(error) {
        yield put({ type: types.LOGIN_USER_ERROR, error })
      }
}