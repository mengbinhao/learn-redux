import React, { Component } from 'react'
import List from 'antd/es/list'
import 'antd/es/list/style/css'
import store from '../store'
import { deleteItemAction, getItemsAction } from '../store/actionCreator'
import axios from 'axios'

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
    // http://v.juhe.cn/toutiao/index?key=321a6d85d63e1f55bf7f059417beb629
    // http://api.avatardata.cn/TouTiao/Query?key=e96b23a852f34c8489397cd05f919c8d&type=top
    axios.get(`https://bird.ioliu.cn/v1/?url=http://api.avatardata.cn/TouTiao/Query?key=e96b23a852f34c8489397cd05f919c8d&type=top`,)
      .then(res => {
        let tmp = res.data.result.data
        if (tmp.length > 10) tmp.length = 10
        const action = getItemsAction(tmp)
        store.dispatch(action)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default TodoItem
