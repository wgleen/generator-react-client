import React from 'react'
import { reduxForm } from 'redux-form'
import TextFieldRedux from '../Fields/TextFieldRedux'
import Button from '@material-ui/core/Button'

let TodoForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <TextFieldRedux
        name='title'
        hintText='Title'
      />

      <Button
        variant='contained' 
        color='primary'
        type='submit'
      >
        Add
      </Button>
    </form>
  )
}

TodoForm = reduxForm({
  form: 'TodoForm'
})(TodoForm)

export default TodoForm