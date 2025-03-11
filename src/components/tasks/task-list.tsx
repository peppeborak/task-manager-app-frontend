import { List } from '@mui/material'
import { useGetTasks } from '../../queries/queries'
import { Task } from '../../queries/types'
import { TaskListItem } from './task-list-item'


type Props = {
  sortOrder: 'asc' | 'desc'
  searchTaskTitle: string
}

export const TaskList = ({ sortOrder, searchTaskTitle }: Props) => {
  const { data: tasks, isPending, error } = useGetTasks()
  if (isPending) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  const sortedTasks = [...tasks].sort((a, b) =>
    sortOrder === 'asc'
      ? new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      : new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  return (
    <List>
      {sortedTasks
        .filter((task: Task) =>
          task.title.toLowerCase().includes(searchTaskTitle.toLowerCase())
        )
        .map((task: Task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
    </List>
  )
}
