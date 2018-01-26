import React from 'react'
import TodosList from './TodosList'
import TodosCreate from './TodosCreate'

const Todos = props => (
  <div>
    <TodosList />

    <TodosCreate />
  </div>
)

export default Todos