import React, { useState } from 'react'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'

export default function Header() {
  const [text, setText] = useState()
  const dispatch = useDispatch()

  const keyPressHandle = (event) => {
    if ((event.key === 'Enter')) {
      dispatch({
        type: 'todos/todoAdded',
        payload: text,
      })
    }
  }
  console.log(text)
  return (
    <Box sx={{ minWidth: 400 }}>
      <TextField
        id="outlined-required"
        helperText="Adding the new todo"
        onKeyPress={(event) => keyPressHandle(event)}
        onChange={(event) => setText(event.target.value)}
      />
    </Box>
  )
}
