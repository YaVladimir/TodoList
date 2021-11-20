import { useSelector } from 'react-redux'
import React from 'react'
import { TodoListItem } from '../TodoListItem/TodoListItem'
import { List } from '@mui/material'
import { Status } from '../../feature/filter/filterSlice'

export function TodoList() {
  const filter = useSelector((state) => state.filters)
  console.log(filter)
  const todos = useSelector((state) => {
    let filteredTodos = state.todos
    if (filter.status === Status.Active) {
      filteredTodos = state.todos.filter((todo) => !todo.completed)
    } else if (filter.status === Status.Completed) {
      filteredTodos = state.todos.filter((todo) => todo.completed)
    }
    if (filter.colors.length !== 0) {
      filteredTodos = filteredTodos.filter((todo) =>
        filter.colors.includes(todo.color)
      )
    }
    return filteredTodos
  })
  console.log(todos)
  const list = todos.map((todo) => {
    return <TodoListItem id={todo.id} todo={todo} />
  })
  return <List>{list}</List>
}
