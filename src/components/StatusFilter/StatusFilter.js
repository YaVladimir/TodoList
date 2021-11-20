import React from 'react'
import { useDispatch } from 'react-redux'
import { Status } from '../../feature/filter/filterSlice'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Button, Stack } from '@mui/material'

const FunctionButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function StatusFilter() {
  const dispatch = useDispatch()

  return (
    <Stack>
      <FunctionButton
        onClick={() =>
          dispatch({
            type: 'filters/statusFilterChanged',
            payload: Status.All,
          })
        }
      >
        All
      </FunctionButton>
      <FunctionButton
        onClick={() =>
          dispatch({
            type: 'filters/statusFilterChanged',
            payload: Status.Active,
          })
        }
      >
        Active
      </FunctionButton>
      <FunctionButton
        onClick={() =>
          dispatch({
            type: 'filters/statusFilterChanged',
            payload: Status.Completed,
          })
        }
      >
        Completed
      </FunctionButton>
    </Stack>
  )
}
