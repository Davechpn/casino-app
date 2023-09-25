import axios from 'axios';
import { put, takeLatest,  } from 'redux-saga/effects';
import { getGamesErrorAction, getGamesSuccessAction } from './games.slice';
import { GAMES } from '../types/game';

const gameURl = `https://0sodnhvmad.execute-api.us-east-1.amazonaws.com/staging`

function* getGamesSaga():any {
  try {
    const response = yield axios.get(gameURl);
    yield put(getGamesSuccessAction(response.data.body));
  } catch (error) {
    yield put(getGamesErrorAction(error as string));
  }
}

export function* gamesSaga() {
  yield takeLatest(`${GAMES}/getGamesAction`, getGamesSaga);
}
