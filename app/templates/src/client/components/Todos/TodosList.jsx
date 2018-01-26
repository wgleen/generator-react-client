import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTodos } from '../../actions/todosActions'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

class TodosList extends Component {
  componentWillMount () {
    const {
      getTodos
    } = this.props

    getTodos()
  }

  render () {
    const {
      todos
    } = this.props

    const _todos = todos.map((todo, i) => (
      <TableRow key={i}>
        <TableRowColumn>{todo.id}</TableRowColumn>
        <TableRowColumn>{todo.title}</TableRowColumn>
      </TableRow>
    ))

    return (
      <div>
        <h2>Todo list</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {_todos}
          </TableBody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer.todos.content
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getTodos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)