import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { gamesReducer } from './games.slice';
import { gamesSaga } from './games.sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: gamesReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(gamesSaga);

export default store;
