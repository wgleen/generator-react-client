import React from 'react'
import { reduxForm } from 'redux-form'
import TextFieldRedux from '../Fields/TextFieldRedux'
import Button from '@material-ui/core/Button'
import styles from './todosForm.scss'

let TodosForm = props => {
  const { handleSubmit } = props

  return (
    <form 
      onSubmit={handleSubmit}
      className={styles.todosForm}
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

TodosForm = reduxForm({
  form: 'TodoForm'
})(TodosForm)

export default TodosForm