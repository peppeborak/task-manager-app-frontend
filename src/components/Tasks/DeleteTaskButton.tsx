import ClearIcon from '@mui/icons-material/Clear'
import { IconButton } from '@mui/material'
import { deleteTaskToDb } from '../../services/api'
import { invalidateTasks, Task } from '../../queries'

type Props = {
  task: Task
}

export const DeleteTaskButton = ({ task }: Props) => {
  const handleDeleteTask = async () => {
    await deleteTaskToDb({ id: task.id })
    invalidateTasks()
  }

  return (
    <IconButton size="small" onClick={handleDeleteTask} edge="end">
      <ClearIcon />
    </IconButton>
  )
}
