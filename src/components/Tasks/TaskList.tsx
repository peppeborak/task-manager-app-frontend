import {
  Divider,
  Grid2 as List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { Task, useGetTasks } from '../../queries'
import { TaskListItem } from './TaskListItem'

type Props = {
  taskFilter: null | string
}


export const TaskList = ({ taskFilter }: Props) => {
  const { data: tasks, isPending, error } = useGetTasks()
  if (isPending) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  return (
    <List>
      <ListItem key={'Top'}>
        <ListItemText primary={'Title'} />
        <ListItemText primary={'Priority'} />
        <ListItemText primary={'Status'} />
        <ListItemText primary={'Category'} />
      </ListItem>
      <Divider />
      {tasks
        .filter(
          (task: Task) => taskFilter === null || task.status === taskFilter
        )
        .map((task: Task) => (
          <ListItem key={task.id}>
            <TaskListItem task={task}/>
          </ListItem>
        ))}
        
    </List>
  )
}
