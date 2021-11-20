import React from 'react'
import { useDispatch } from 'react-redux'
import { blue, green, purple, red } from '@mui/material/colors'
import { Checkbox, Stack } from '@mui/material'

export default function ColorFilter() {
  const dispatch = useDispatch()
  const getActionType = (event) => {
    return event.target.checked ? 'added' : 'removed'
  }
  return (
    <Stack>
      <h4>Filter by Color</h4>
      <Checkbox
        label={'Red'}
        sx={{ color: red[800], '&.Mui-checked': { color: red[600] } }}
        onChange={(event) =>
          dispatch({
            type: getActionType(event),
            payload: 'red',
          })
        }
      />
      <Checkbox
        label={'Blue'}
        sx={{ color: blue[800], '&.Mui-checked': { color: blue[600] } }}
        onChange={(event) =>
          dispatch({
            type: getActionType(event),
            payload: 'blue',
          })
        }
      />
      <Checkbox
        label={'Green'}
        sx={{ color: green[800], '&.Mui-checked': { color: green[600] } }}
        onChange={(event) =>
          dispatch({
            type: getActionType(event),
            payload: 'green',
          })
        }
      />

      <Checkbox
        label={'Purple'}
        sx={{ color: purple[800], '&.Mui-checked': { color: purple[600] } }}
        onChange={(event) =>
          dispatch({
            type: getActionType(event),
            payload: 'purple',
          })
        }
      />
    </Stack>
  )
}
