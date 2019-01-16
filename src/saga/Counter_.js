import { delay } from 'redux-saga'
import { call , spawn , put , take, takeLatest, takeEvery, select } from 'redux-saga/effects';
import * as counterActions from 'modules/Counter';

function* fetchIncrease(){
    try {
        const {Counter} = yield select();
        yield put(counterActions.setFuncAction(Counter.number + 1));
    } catch (error) {
        console.log('error!');
    }
}

function* fetchDecrease(){
    try {
        const {Counter} = yield select();
        yield put(counterActions.setFuncAction(Counter.number - 1));
    } catch (error) {
        console.log('error!');
    }
}

function* fetchAsyncIncrease(){
    try {
        yield delay(1000);
        const {Counter} = yield select();
        yield put(counterActions.setFuncAction(Counter.number + 1));
    } catch (error) {
        console.log('error!');
    }
}

export default function* watchCounter() {
    console.log('run watchCounter');
    yield takeEvery(counterActions.INCREMENT     , fetchIncrease     );
    yield takeEvery(counterActions.DECREMENT     , fetchDecrease     );
    yield takeEvery(counterActions.ASYNCINCREMENT, fetchAsyncIncrease);
}
