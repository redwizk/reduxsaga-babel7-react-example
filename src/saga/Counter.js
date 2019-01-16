import { delay } from 'redux-saga'
import { call , spawn , put , take, takeLatest, takeEvery, select } from 'redux-saga/effects';
import * as counterActions from '../redux/Counter';

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

const Counter = [
        takeEvery(counterActions.INCREMENT, fetchIncrease),
        takeEvery(counterActions.DECREMENT, fetchDecrease),
        takeEvery(counterActions.ASYNCINCREMENT, fetchAsyncIncrease)
    ];

export default Counter;