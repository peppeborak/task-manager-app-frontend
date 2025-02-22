import { Grid2 as Grid } from '@mui/material'
import { TaskList } from '../components/Tasks/TaskList'
import { useState } from 'react'
import AppMenu from '../components/AppMenu/AppMenu'

export default function DashboardPage() {
  //const [searchTaskTitle, setSearchTaskTitle] = useState<string>('')
  const [taskFilter, setTaskFilter] = useState<null | string>(null)

  return (
    <Grid container spacing={2}>
      <Grid size={{ md: 3 }}>
        <AppMenu setTaskFilter={setTaskFilter} />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <TaskList taskFilter={taskFilter} />
      </Grid>
    </Grid>
  )
}
