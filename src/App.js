import React, { Component } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Todo List'
    }
  }
  render() {
    return (
      <div>
        <TodoHeader header="Todo List" />
        <TodoInput />
        <TodoItem />
      </div>
    )
  }
}

export default App
