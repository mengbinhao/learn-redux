import React, { Component } from 'react'
import Input from 'antd/es/input'
import 'antd/es/input/style/css'
import Button from 'antd/es/button'
import 'antd/es/button/style/css'
import store from '../store'
import { changeValAction, addItemAction } from '../store/actionCreator'

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    this.storeChange = this.storeChange.bind(this)
    this.addItem = this.addItem.bind(this)
    //subscribe callback
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
        <Button
          type="primary"
          size="large"
          shape="round"
          onClick={this.addItem}
        >
          按钮
        </Button>
      </div>
    )
  }
  changeVal(e) {
    //defaine related action
    const action = changeValAction(e.target.value)
    store.dispatch(action)
  }
  addItem() {
    const action = addItemAction()
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
}

export default TodoInput
