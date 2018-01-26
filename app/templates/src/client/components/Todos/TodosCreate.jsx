import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createAndGetTodos } from '../../actions/todosActions'
import TodosForm from './TodoForm'

const TodosCreate = props => {
  const { createAndGetTodos } = props

  return (
    <div>
      <h2>Add Todo</h2>
      <TodosForm onSubmit={createAndGetTodos} />
    </div>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createAndGetTodos }, dispatch)

export default connect(null, mapDispatchToProps)(TodosCreate)