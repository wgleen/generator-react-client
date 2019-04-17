import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createAndGetTodos as createAndGetTodosAction } from '../../actions/todosActions'
import TodosForm from './TodosForm'

const TodosCreate = (props) => {
  const { createAndGetTodos } = props

  return (
    <div>
      <h2>Add Todo</h2>

      <TodosForm onSubmit={createAndGetTodos} />
    </div>
  )
}

TodosCreate.propTypes = {
  createAndGetTodos: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createAndGetTodos: createAndGetTodosAction
}, dispatch)

export default connect(null, mapDispatchToProps)(TodosCreate)
