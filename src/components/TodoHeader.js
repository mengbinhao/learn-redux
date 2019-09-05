import React, { Component } from 'react'
import store from '../store'

class TodoHeader extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  render() {
    return <h3>{this.state.placeHolder}</h3>
  }
}

export default TodoHeader
