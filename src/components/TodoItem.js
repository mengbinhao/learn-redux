import React, { Component } from 'react'
import List from 'antd/es/list'
import 'antd/es/list/style/css'
import store from '../store'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <div style={{ width: '390px', margin: '10px auto' }}>
        <List
          bordered
          dataSource={this.state.items}
          renderItem={(item, index) => (
            <List.Item onClick={this.deleteItem.bind(this, index)}>
              {item}
            </List.Item>
          )}
          size="large"
        />
      </div>
    )
  }
  storeChange() {
    this.setState(store.getState())
  }
  deleteItem(idx) {
    store.dispatch({
      type: 'deleteItem',
      value: idx
    })
  }
}

export default TodoItem
