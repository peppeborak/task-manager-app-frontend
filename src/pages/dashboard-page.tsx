import { Grid2 as Grid, Typography } from '@mui/material'
import { TaskList } from '../components/Tasks/TaskList'
import { useState } from 'react'
import AppMenu from '../components/AppMenu/AppMenu'

export default function DashboardPage() {
  //const [searchTaskTitle, setSearchTaskTitle] = useState<string>('')
  const [taskFilter, setTaskFilter] = useState<null | string>(null)

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 8}} offset={{ md: 4}}>
        <Typography variant='h3'sx={{padding: 1}} >Task Manager App</Typography>
      </Grid>
      <Grid size={{ md: 3 }}>
        <AppMenu taskFilter={taskFilter} setTaskFilter={setTaskFilter} />
      </Grid>
      <Grid size={{ xs: 12, md: 8}}>
        <TaskList taskFilter={taskFilter} />
      </Grid>
    </Grid>
  )
}
