import {
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Card,
  CardContent,
  Box,
  CardActionArea,
} from '@mui/material'
import { invalidateTasks, Task, updateTask } from '../../queries'
import {
  updateCategoryToDb,
  updatePriorityToDb,
  updateStatusToDb,
} from '../../services/api'
import { useState } from 'react'
import { DeleteTaskButton } from './DeleteTaskButton'

type Props = {
  task: Task
}

const categories = [
  {
    value: 'home',
    label: 'home',
  },
  {
    value: 'work',
    label: 'work',
  },
  {
    value: 'hobby',
    label: 'hobby',
  },
]

const statuses = [
  {
    value: 'pending',
    label: 'pending',
  },
  {
    value: 'in-progress',
    label: 'in-progress',
  },
  {
    value: 'completed',
    label: 'completed',
  },
]

const priorities = [
  {
    value: 'high',
    label: 'high',
  },
  {
    value: 'medium',
    label: 'medium',
  },
  {
    value: 'low',
    label: 'low',
  },
]

export const TaskListItem = ({ task }: Props) => {
  const [title, setTitle] = useState(task.title)
  // const [priority, setPriority] = useState(task.priority)
  // const [status, setStatus] = useState(task.status)

  const handleTitle = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
    updateTask(task.id, { updatedTitle: event.target.value })
  }

  const handleSelectCategory = async (id: number, updatedCategory: string) => {
    await updateCategoryToDb({ id, updatedCategory })
    invalidateTasks()
  }

  const handleSelectStatus = async (id: number, updatedStatus: string) => {
    await updateStatusToDb({ id, updatedStatus })
    invalidateTasks()
  }

  const handleSelectPriority = async (id: number, updatedPriority: string) => {
    await updatePriorityToDb({ id, updatedPriority })
    invalidateTasks()
  }

  /*
  const handleSelectStatus = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value)
    updateTask(task.id, { updatedStatus: event.target.value })
  }
    */

  return (
    <>
      <Card>
        <CardContent>
          <Box>
            <TextField
              variant="standard"
              value={title}
              onChange={handleTitle}
            />
            <DeleteTaskButton task={task} />
          </Box>

          <CardActionArea>
            <div>
              <Select
                size="small"
                sx={{ minWidth: 105 }}
                value={task.priority}
                label="priority"
                onChange={(event: SelectChangeEvent) =>
                  handleSelectPriority(task.id, event.target.value)
                }
              >
                {priorities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div>
              <Select
                size="small"
                sx={{ minWidth: 105 }}
                value={task.status}
                label="status"
                onChange={(event: SelectChangeEvent) =>
                  handleSelectStatus(task.id, event.target.value)
                }
              >
                {statuses.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div>
              <Select
                size="small"
                sx={{ minWidth: 105 }}
                value={task.category || ''}
                label="category"
                onChange={(event: SelectChangeEvent) =>
                  handleSelectCategory(task.id, event.target.value)
                }
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </CardActionArea>
        </CardContent>
      </Card>
    </>
  )
}
