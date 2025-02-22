import {
  Divider,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@mui/material'
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
        <Grid size={12}>
          <List>
            <ListItem key={'Top'}>
              <ListItemText primary={'Title'} />
              <ListItemText primary={'Priority'} />
              <ListItemText primary={'Status'} />
              <ListItemText primary={'Category'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            {tasks
              .filter(
                (task: Task) =>
                  taskFilter === null || task.status === taskFilter
              )
              .filter((task: Task) =>
                task.title.toLowerCase().includes(searchTaskTitle.toLowerCase())
              )
              .map((task: Task) => (
                <ListItem key={task.id}>
                  <TaskListItem task={task} />
                </ListItem>
              ))}
          </List>
        </Grid>
      </Grid>
    </>
  )
}
