import { Button, Grid2 as Grid, TextField } from '@mui/material'
import { LogoutButton } from '../user/LogoutButton'
import { invalidateTasks, newTask } from '../../queries'
import { useState } from 'react'

type Props = {
  setTaskFilter: (value: React.SetStateAction<string | null>) => void
}
export default function AppMenu({ setTaskFilter }: Props) {
  const [searchTaskTitle, setSearchTaskTitle] = useState<string>('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTaskTitle(event.target.value)
  }

  const handleAllTasksClick = () => {
    setTaskFilter(null)
  }
  const handleCompletedClick = () => {
    setTaskFilter('completed')
  }
  const handleInprogressClick = () => {
    setTaskFilter('in-progress')
  }
  const handleNewTaskClick = async () => {
    await newTask({ title: 'New task' })
    invalidateTasks()
  }

  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <Grid size={{ xs: 12 }}>
          <TextField
            variant="standard"
            value={searchTaskTitle}
            onChange={handleSearch}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <LogoutButton />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button onClick={handleAllTasksClick}>All Tasks</Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button onClick={handleCompletedClick}>Completed Tasks</Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button onClick={handleInprogressClick}>In-progress Tasks</Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleNewTaskClick}
          >
            New task
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
