import { all, spawn } from 'redux-saga/effects'

import watchCounter from './Counter';

function* combineSaga() {
    yield watchCounter();
}

export default function* watchSaga() {
    console.log('run watchSaga');
    yield spawn(combineSaga);
}
