import React, { Component } from 'react'
import List from 'antd/es/list'
import 'antd/es/list/style/css'

class TodoItem extends Component {
  render() {
    return (
      <div style={{ width: '390px', margin: '10px auto' }}>
        <List
          bordered
          dataSource={this.props.items}
          renderItem={item => <List.Item>{item}</List.Item>}
          size="large"
        />
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.items)
  }
}

export default TodoItem
