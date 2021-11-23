import { Grid } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import CompletedTodos from '../CompletedTodos/CompletedTodos'
import StatusFilter from '../StatusFilter/StatusFilter'
import ColorFilter from '../ColorFilter/ColorFilter'

export default function Footer() {
  const dispatch = useDispatch()

  return (
    <Grid>
      <CompletedTodos />
      <StatusFilter />
      <ColorFilter />
    </Grid>
  )
}
