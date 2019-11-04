import { takeLatest } from "redux-saga/effects";
import { loginUser } from "./userAuthentication";
import * as types from "./../actions/actionsList.js";

export default function* watchUserAuthentication(){
    yield takeLatest(types.USER_AUTH, loginUser);
    
    // TODO: user registartion flow
    // yield takeLatest(types.USER_REGISTER, registerUser); 
}