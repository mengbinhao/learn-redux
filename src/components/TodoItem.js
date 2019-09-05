import React, { Component } from 'react'
import List from 'antd/es/list'
import 'antd/es/list/style/css'
import store from '../store'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  render() {
    return (
      <div style={{ width: '390px', margin: '10px auto' }}>
        <List
          bordered
          dataSource={this.state.items}
          renderItem={item => <List.Item>{item}</List.Item>}
          size="large"
        />
      </div>
    )
  }
}

export default TodoItem
