import {createStore, applyMiddleware} from 'redux';
import reducers from 'redux/reducer';

import createSagaMiddleware, {END} from 'redux-saga';
import watchSaga from 'redux/saga';

const saga = createSagaMiddleware();

const store = createStore(
    reducers, 
    applyMiddleware(saga)
    );

saga.run(watchSaga);
store.close = () => store.dispatch(END);

export default store;