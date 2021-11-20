import React from 'react'
import { useDispatch } from 'react-redux'
import { Stack, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const ActionButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}))

export default function CompletedTodos() {
  const dispatch = useDispatch()

  return (
    <Stack>
      <h4>Actions</h4>
      <ActionButton onClick={() => dispatch({ type: 'todos/allCompleted' })}>
        Mark All Completed
      </ActionButton>
      <ActionButton
        onClick={() => dispatch({ type: 'todos/completedCleared' })}
      >
        Clear Completed
      </ActionButton>
    </Stack>
  )
}
