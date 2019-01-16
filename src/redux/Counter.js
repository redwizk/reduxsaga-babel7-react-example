import { handleActions, createAction } from 'redux-actions';

const initState = {
  number:0,
  data: {
    title: '',
    body: ''
  }
};

export const ASYNCINCREMENT = 'ASYNCINCREMENT';
export const INCREMENT = 'INCREMENTS';
export const DECREMENT = 'DECREMENT';
export const SETFUNC   = 'SETFUNC';

export const incrementAsyncAction   = createAction(ASYNCINCREMENT );
export const incrementAction        = createAction(INCREMENT        );
export const decrementAction        = createAction(DECREMENT        );
export const setFuncAction          = createAction(SETFUNC          );

const incrementFunc = (state, action) => {
  console.log("incrementFunc");

  let nextState = {...state};
  nextState.number = nextState.number + 1;

  return nextState;
}

const decrementFunc = (state, action) => {
  console.log("decrementFunc");
  
  let nextState = {...state};
  nextState.number = nextState.number - 1;

  return nextState;
}

const setFunc = (state, action) => {
  console.log(action.payload);

  let nextState = {...state};
  nextState.number = action.payload;

  return nextState;
}

// handleActions에서 만들어진 reducer는 combineReducers에 넘김

const reducer = {
  [SETFUNC  ]: setFunc      ,
}

export default handleActions(reducer, initState);

// 나머지 export 함수는 bindActionCreators로 넘겨 Props 에서 사용 할 수 있도록 함
