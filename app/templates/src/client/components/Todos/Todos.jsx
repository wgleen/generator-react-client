import React from 'react'
import TodosList from './TodosList'
import TodosCreate from './TodosCreate'

const Todos = props => (
  <div>
    <TodosCreate />

    <TodosList />
  </div>
)

export default Todos