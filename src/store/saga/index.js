import { all, takeLeading } from 'redux-saga/effects';
import { getPeople } from './people'


export default function* rootSaga() {
  yield all([
    takeLeading('REQUEST_PEOPLE_LIST', getPeople )
  ]);
}
