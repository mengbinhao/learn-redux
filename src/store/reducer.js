const defaultState = {
  inputValue: 'Pls input something...',
  items: [
    '今天天气好好心情不错哦',
    'React + Redux + React-Router',
    '老汉敲背精油按摩全套打折促销'
  ]
}

export default (state = defaultState, action) => {
  //Reducer只接收state但不能改变state
  if (action.type === 'changeVal') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}
