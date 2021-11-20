import React from 'react'
import { useDispatch } from 'react-redux'
import { Select, MenuItem } from '@mui/material'

export function ColorSelector(props) {
  const selectedColor = props.color
  const dispatch = useDispatch()

  return (
    <Select
      labelId="demo-simple-select-label"
      value={selectedColor}
      label="Color"
      autoWidth={false}
      onOpen={(event) => event.stopPropagation()}
      onChange={(event) => {
        event.stopPropagation()
        handleChange(event.target.value, props.id)
      }}
      sx={{ minWidth: 120 }}
    >
      <MenuItem value={'red'} sx={{ color: 'red' }}>
        Red
      </MenuItem>
      <MenuItem value={'green'} sx={{ color: 'green' }}>
        Green
      </MenuItem>
      <MenuItem value={'blue'} sx={{ color: 'blue' }}>
        Blue
      </MenuItem>
      <MenuItem value={'purple'} sx={{ color: 'purple' }}>
        Purple
      </MenuItem>
    </Select>
  )

  function handleChange(color, id) {
    console.log('handle', color, id)
    dispatch({
      type: 'todos/colorSelected',
      payload: { id: id, color: color },
    })
  }
}
