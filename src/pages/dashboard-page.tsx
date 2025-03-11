import { Box, Divider, Grid2 as Grid } from '@mui/material'
import { useState } from 'react'
import { AddTaskButton } from '../components/tasks/add-task-button'
import { FilterTasksButton } from '../components/tasks/filter-tasks-button'
import { SearchTaskInputField } from '../components/tasks/search-task-input-field'
import { SortTasksByCreatedButton } from '../components/tasks/sort-tasks-by-created-button'
import { TaskList } from '../components/tasks/task-list'


export function DashboardPage() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [searchTaskTitle, setSearchTaskTitle] = useState<string>('')

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <FilterTasksButton />
          <SearchTaskInputField
            searchTaskTitle={searchTaskTitle}
            setSearchTaskTitle={setSearchTaskTitle}
          />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <SortTasksByCreatedButton setSortOrder={setSortOrder} />
            <AddTaskButton />
          </Box>
        </Box>
      </Grid>
      <Divider />
      <Grid size={12}>
        <TaskList searchTaskTitle={searchTaskTitle} sortOrder={sortOrder} />
      </Grid>
    </Grid>
  )
}
