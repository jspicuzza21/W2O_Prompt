import { types } from './actions';
import { combineReducers } from 'redux';

const initialState={}

const rootReducer=(state=initialState, action)=>{
  switch(action.type){
    default: return state;
  }
}

const reducer = combineReducers({
  rootReducer,
});

export default reducer;