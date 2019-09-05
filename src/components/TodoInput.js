import React, { Component } from 'react'
import Input from 'antd/es/input'
import 'antd/es/input/style/css'
import Button from 'antd/es/button'
import 'antd/es/button/style/css'
import store from '../store'

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    //subscribe callback
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <div>
        <Input
          placeholder="pls input something..."
          size="large"
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
          onChange={this.changeVal}
          value={this.state.inputValue}
        />
        <Button type="primary" size="large" shape="round">
          按钮
        </Button>
      </div>
    )
  }
  changeVal(e) {
    //defaine related action
    const action = {
      type: 'changeVal',
      value: e.target.value
    }
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
}

export default TodoInput
