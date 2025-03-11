import DeleteIcon from '@mui/icons-material/Delete'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Checkbox, IconButton, ListItem, TextField } from '@mui/material'
import { useState } from 'react'
import { deleteTask, invalidateTasks, updateTask } from '../../queries/queries'
import { Task } from '../../queries/types'


type Props = {
  task: Task
}

export const TaskListItem = ({ task }: Props) => {
  const [checked, setChecked] = useState(task.isCompleted)
  const [taskTitle, setTaskTitle] = useState(task.title)

  const handleCheckboxChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedIsCompleted = event.target.checked
    try {
      await updateTask({
        taskId: task.id,
        updatedIsCompleted,
      })
      setChecked(updatedIsCompleted)
      invalidateTasks()
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  const handleTaskTitleChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedTitle = event.target.value
    try {
      await updateTask({ taskId: task.id, updatedTitle })
      setTaskTitle(updatedTitle)
    } catch (error) {
      console.error('Error updating task title:', error)
    }
  }

  const handleDeleteTask = async () => {
    try {
      await deleteTask({ taskId: task.id })
      invalidateTasks()
    } catch (error) {
      console.error('error deleting task', error)
    }
  }

  return (
    <ListItem sx={{ justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <TextField
          variant="standard"
          sx={{
            flexGrow: 1,
            whiteSpace: 'nowrap',
            textDecoration: task.isCompleted ? 'line-through' : 'none',
          }}
          value={taskTitle}
          onChange={handleTaskTitleChange}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: { xs: '20%', md: '10%' },
        }}
      >
        <IconButton>
          <MoreVertIcon />
        </IconButton>

        <IconButton onClick={handleDeleteTask}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  )
}
