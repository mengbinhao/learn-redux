import React, { Component } from 'react'
import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

const data = [
  '今天心情不错哦',
  'React + Redux + React-Router',
  '老汉敲背精油按摩全套'
]

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
        <TodoHeader content={this.state.content} />
        <TodoInput />
        <TodoItem items={data} />
      </div>
    )
  }
}

export default App
