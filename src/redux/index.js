import {initState} from './state'
import * as types from './actionType'

export function reducer(state = initState, action) {
  switch (action.type) {
    case types.SET_TIME :
      return {...state, time: action.payload}
    default :
      return state
  }
}

function time(time) {
  return {
    type: types.SET_TIME,
    payload: time
  }
}

function setTime(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(time(time))  
    }, 1000)
  }
}