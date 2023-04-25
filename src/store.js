import { legacy_createStore as createStore } from 'redux'
import { combineReducers } from "redux";
import {formValueReducer, formCountReducer} from './Redux/Reducers/FormReducer'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const reducer = combineReducers({
  changeState,
  formValueReducer,
  formCountReducer
});

const store = createStore(
  reducer,
  {},
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;
