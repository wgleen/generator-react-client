import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTodos as getTodosAction } from '../../actions/todosActions'

class TodosList extends Component {
  componentWillMount() {
    const {
      getTodos
    } = this.props

    getTodos()
  }

  render() {
    const {
      todos
    } = this.props

    const _todos = todos.map((todo, i) => (
      <TableRow key={i}>
        <TableCell>{todo.id}</TableCell>
        <TableCell>{todo.title}</TableCell>
      </TableRow>
    ))

    return (
      <div>
        <h2>Todo list</h2>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_todos}
          </TableBody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const _state = state.todosReducer.todos

  return {
    todos: _state.content,
    received: _state.received
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getTodos: getTodosAction }, dispatch)

TodosList.defaultProps = {
  todos: []
}

TodosList.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
