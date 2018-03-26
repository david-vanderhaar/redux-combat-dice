// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './redux/reducers/reducer_index'
import App from './App'

import {
  incrementBaseStat,
  decrementBaseStat,
  selectTarget
} from './redux/actions/action_index';
 
let store = createStore(app)
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

)

console.log(store.getState())
store.dispatch(incrementBaseStat(1, 'speed'))
store.dispatch(incrementBaseStat(1, 'speed'))
store.dispatch(incrementBaseStat(1, 'speed'))
store.dispatch(incrementBaseStat(1, 'speed'))
// store.dispatch(decrementBaseStat(1, 'speed'))
// store.dispatch(decrementBaseStat(1, 'speed'))
// store.dispatch(decrementBaseStat(1, 'speed'))
// store.dispatch(decrementBaseStat(1, 'speed'))
store.dispatch(selectTarget(1, 'left_arm'))
store.dispatch(selectTarget(1, 'right_arm'))
console.log(store.getState())
