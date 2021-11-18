import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { ListItem, ListItemButton, ListItemText, Checkbox } from '@mui/material'

export function TodoListItem(props) {
  const { completed, text } = props.todo
  const dispatch = useDispatch()

  return (
    <ListItem>
      <ListItemButton
        onClick={() =>
          dispatch({ type: 'todos/todoToggled', payload: props.id })
        }
      >
        <Checkbox checked={completed} />
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}
