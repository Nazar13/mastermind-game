import { put, call, takeEvery } from "redux-saga/effects";
import api from "../services/api";

export const requestPlayers = () => {
  console.log("REQUEST_PLAYERS");
  return { type: "REQUEST_PLAYERS" };
};

const requestPlayersSuccess = data => {
  return { type: "REQUEST_PLAYERS_SUCCESS", payload: data };
};

const requestPlayersError = () => {
  return { type: "REQUEST_PLAYERS_ERROR" };
};

function* fetchAllPlayers() {
  try {
    const url = api.baseURL + "all-users";
    const response = yield call(fetch, url); // add wrapper to fetch
    const data = yield call([response, "json"]); //
    yield put(requestPlayersSuccess(data));
  } catch (error) {
    yield put(requestPlayersError());
  }
}

export default function* rootSaga() {
  yield takeEvery("FETCH_PLAYERS", fetchAllPlayers);
}
