import { useSelector } from 'react-redux'
import React from 'react'
import { TodoListItem } from '../TodoListItem/TodoListItem'
import { List } from '@mui/material'

export function TodoList() {
  const filter = useSelector((state) => state.filters)
  console.log(filter);
  const todos = useSelector((state) => state.todos)
  const list = todos.map((todo) => {
    return <TodoListItem id={todo.id} todo={todo} />
  })
  return <List>{list}</List>
}
