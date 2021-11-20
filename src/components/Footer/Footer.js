import { Container, Stack, Button, Grid } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CompletedTodos from '../CompletedTodos/CompletedTodos'
import StatusFilter from '../StatusFilter/StatusFilter'

export default function Footer() {
  const filter = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  return (
    <Grid>
      <CompletedTodos />
      <StatusFilter />
    </Grid>
  )
}
