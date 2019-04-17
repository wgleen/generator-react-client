import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import TextFieldRedux from '../Fields/TextFieldRedux'
import styles from './todosForm.scss'

const TodosForm = (props) => {
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
          fullWidth
        />
      </div>

      <div>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          fullWidth
        >
          Add
        </Button>
      </div>
    </form>
  )
}

TodosForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'TodoForm'
})(TodosForm)
