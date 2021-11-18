import { useSelector } from 'react-redux'
import React from 'react'
import { TodoListItem } from '../TodoListItem/TodoListItem'
import { List } from '@mui/material'

export function TodoList() {
  const todos = useSelector((state) => state.todos)
  const list = todos.map((todo) => {
    console.log(todo)
    return <TodoListItem id={todo.id} todo={todo} />
  })
  return <List>{list}</List>
}
