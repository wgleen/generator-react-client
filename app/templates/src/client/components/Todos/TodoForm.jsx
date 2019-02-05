import React from 'react'
import { reduxForm } from 'redux-form'
import TextFieldRedux from '../Fields/TextFieldRedux'
import Button from '@material-ui/core/Button'
import styles from './todoForm.scss'

let TodoForm = props => {
  const { handleSubmit } = props

  return (
    <form 
      onSubmit={handleSubmit}
      className={styles.todoForm}
    >
      <div>
        <TextFieldRedux
          name='title'
          label='Title'
          margin='normal'
          fullWidth={true}
        />
      </div>

      <div>
        <Button
          variant='contained' 
          color='primary'
          type='submit'
          fullWidth={true}
        >
          Add
        </Button>
      </div>
    </form>
  )
}

TodoForm = reduxForm({
  form: 'TodoForm'
})(TodoForm)

export default TodoForm