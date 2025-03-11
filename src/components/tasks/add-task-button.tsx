import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'
import { addTask, invalidateTasks } from '../../queries/queries'


export const AddTaskButton = () => {

  const handleAddTask = async () => {
    await addTask({ title: 'New task' })
    invalidateTasks()
  }

  return (
    <IconButton onClick={handleAddTask}>
      <AddIcon />
    </IconButton>
  )
}
