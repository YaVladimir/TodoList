import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ClearIcon from '@mui/icons-material/Clear'
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  ListItemIcon,
} from '@mui/material'
import { ColorSelector } from '../ColorSelector/ColorSelector'

export function TodoListItem(props) {
  const { completed, text, id, color } = props.todo
  const dispatch = useDispatch()

  return (
    <ListItem divider={true}>
      <ListItemButton
        onClick={() => dispatch({ type: 'todos/todoToggled', payload: id })}
      >
        <Checkbox checked={completed} />
        <ListItemText primary={text} />
      </ListItemButton>
      <ColorSelector id={id} color={color} />
      <ListItemButton
        onClick={() => dispatch({ type: 'todos/todoDeleted', payload: id })}
        sx={{ maxWidth: 40 }}
      >
        <ListItemIcon>
          <ClearIcon />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  )
}
