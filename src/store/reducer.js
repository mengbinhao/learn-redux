import { CHANGE_VAL, ADD_ITEM, DELETE_ITEM, GET_ITEM } from './actionTypes'

const defaultState = {
  inputValue: '',
  items: [
    // '今天天气好好心情不错哦',
    // 'React + Redux + React-Router',
    // '老汉敲背精油按摩全套打折促销'
  ],
  isloading: true
}

export default (state = defaultState, action) => {
  //console.log(state, action)
  //Reducer只接收state千万不要改变state
  //Reducer只接收state千万不要改变state
  //Reducer只接收state千万不要改变state
  if (action.type === CHANGE_VAL) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.items.push({url: '#', title:newState.inputValue})
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.items.splice(action.value, 1)
    return newState
  }

  if (action.type === GET_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.items = action.value
    newState.isloading = false
    return newState
  }

  return state
}
