import { Button, Grid2 as Grid } from '@mui/material'
import { LogoutButton } from '../user/LogoutButton'
import { invalidateTasks, newTask } from '../../queries'

type Props = {
  setTaskFilter: (value: React.SetStateAction<string | null>) => void
  taskFilter: string | null
}
export default function AppMenu({ setTaskFilter, taskFilter }: Props) {
  const handleAllTasksClick = () => {
    setTaskFilter(null)
  }
  const handleCompletedClick = () => {
    setTaskFilter('completed')
  }
  const handleInprogressClick = () => {
    setTaskFilter('in-progress')
  }
  const handlePendingClick = () => {
    setTaskFilter('pending')
  }
  const handleNewTaskClick = async () => {
    await newTask({ title: 'New task' })
    invalidateTasks()
  }

  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <Grid size={{ xs: 12 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNewTaskClick}
          >
            New task
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            color={taskFilter === null ? 'warning' : 'primary'}
            onClick={handleAllTasksClick}
          >
            All Tasks
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            color={taskFilter === 'pending' ? 'warning' : 'primary'}
            onClick={handlePendingClick}
          >
            Pending Tasks
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            color={taskFilter === 'in-progress' ? 'warning' : 'primary'}
            onClick={handleInprogressClick}
          >
            In-progress Tasks
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            color={taskFilter === 'completed' ? 'warning' : 'primary'}
            onClick={handleCompletedClick}
          >
            Completed Tasks
          </Button>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <LogoutButton />
        </Grid>
      </Grid>
    </Grid>
  )
}
