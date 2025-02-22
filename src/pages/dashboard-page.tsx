import { Button, Grid2 as Grid } from '@mui/material'
import { TaskList } from '../components/dashboard/TaskList'
import { useState } from 'react'
import { SearchTaskInput } from '../components/dashboard/SearchTaskInput'

export default function DashboardPage() {
  const [searchTaskTitle, setSearchTaskTitle] = useState<string>('')
  const [taskFilter, setTaskFilter] = useState<null | string>(null)

  const handleAllTasksClick = () => {
    setTaskFilter(null)
  }
  const handleCompletedClick = () => {
    setTaskFilter('completed')
  }
  const handleInprogressClick = () => {
    setTaskFilter('in-progress')
  }
  // Add pending

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6, md: 3 }}>
        <SearchTaskInput
          searchTaskTitle={searchTaskTitle}
          setSearchTaskTitle={setSearchTaskTitle}
        />
        <Button onClick={handleAllTasksClick}>All Tasks</Button>
        <Button onClick={handleCompletedClick}>Completed Tasks</Button>
        <Button onClick={handleInprogressClick}>In-progress Tasks</Button>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TaskList taskFilter={taskFilter} />
      </Grid>
    </Grid>
  )
}
