import React from 'react'
import { reduxForm } from 'redux-form'
import TextFieldRedux from '../Fields/TextFieldRedux'
import RaisedButton from 'material-ui/RaisedButton'

let TodoForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <TextFieldRedux
        name='title'
        hintText='Title'
      />

      <RaisedButton
        label='Submit'
        primary={true}
        type='submit'
      />
    </form>
  )
}

TodoForm = reduxForm({
  form: 'TodoForm'
})(TodoForm)

export default TodoForm