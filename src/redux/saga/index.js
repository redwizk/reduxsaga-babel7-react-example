import { all, spawn } from 'redux-saga/effects'

import Counter from './Counter';

export default function* watchSaga() {
    console.log('run watchSaga');
    yield all([...Counter]);
}
