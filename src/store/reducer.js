const defaultState = {
  inputValue: '',
  items: [
    '今天天气好好心情不错哦',
    'React + Redux + React-Router',
    '老汉敲背精油按摩全套打折促销'
  ]
}

export default (state = defaultState, action) => {
  console.log(state, action)
  //Reducer只接收state千万不要改变state
  //Reducer只接收state千万不要改变state
  //Reducer只接收state千万不要改变state
  if (action.type === 'changeVal') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === 'addItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.items.push(action.value)
    newState.inputValue = ''
    return newState
  }

  if (action.type === 'deleteItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.items.splice(action.value, 1)
    return newState
  }

  return state
}
