import { Divider, Grid2 as Grid, Paper, TextField } from '@mui/material'
import { Task, useGetTasks } from '../../queries'
import { TaskListItem } from './TaskListItem'
import { useState } from 'react'

type Props = {
  taskFilter: null | string
}

export const TaskList = ({ taskFilter }: Props) => {
  const [searchTaskTitle, setSearchTaskTitle] = useState<string>('')
  const { data: tasks, isPending, error } = useGetTasks()
  if (isPending) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTaskTitle(event.target.value)
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Search for tasks"
            value={searchTaskTitle}
            onChange={handleSearch}
          />
        </Grid>
        <Divider />
        <Grid size={12}>
          <Paper>
            <Grid container>
              {tasks
                .filter(
                  (task: Task) =>
                    taskFilter === null || task.status === taskFilter
                )
                .filter((task: Task) =>
                  task.title
                    .toLowerCase()
                    .includes(searchTaskTitle.toLowerCase())
                )
                .map((task: Task) => (
                  <Grid size={{ md: 4, xs: 12 }} key={task.id}>
                    <TaskListItem task={task} />
                  </Grid>
                ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
