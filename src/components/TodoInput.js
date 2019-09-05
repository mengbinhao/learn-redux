import React, { Component } from 'react'
import Input from 'antd/es/input'
import 'antd/es/input/style/css'
import Button from 'antd/es/button'
import 'antd/es/button/style/css'

class TodoInput extends Component {
  render() {
    return (
      <div>
        <Input
          placeholder="pls input something..."
          size="large"
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <Button type="primary" size="large" shape="round">
          按钮
        </Button>
      </div>
    )
  }
}

export default TodoInput
