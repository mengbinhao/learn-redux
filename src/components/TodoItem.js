import React, { Component } from 'react'
import List from 'antd/es/list'
import 'antd/es/list/style/css'
import store from '../store'
import { deleteItemAction, getAsyncItemsAction } from '../store/actionCreator'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <div style={{ width: '390px', margin: '10px auto' }}>
        <List
          bordered
          dataSource={this.state.items}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.deleteItem(index)}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
            </List.Item>
          )}
          loading = {this.state.isloading}
          size="large"
        />
      </div>
    )
  }
  storeChange() {
    this.setState(store.getState())
  }
  deleteItem(idx) {
    const action = deleteItemAction(idx)
    store.dispatch(action)
  }
  componentDidMount() {
    const action = getAsyncItemsAction()
    store.dispatch(action)
  }
}

export default TodoItem
