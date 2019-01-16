import { combineReducers } from 'redux';
import Counter from './Counter';

export default combineReducers({ 
  Counter : Counter
});

// 여기서 state의 내부 키값이 정해짐
