import { TextField } from '@mui/material'
import { SearchTasksFromDb } from '../../services/api'

type Props = {
  searchTaskTitle: string
  setSearchTaskTitle: React.Dispatch<React.SetStateAction<string>>
}

export const SearchTaskInput = ({
  searchTaskTitle,
  setSearchTaskTitle,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTaskTitle(event.target.value)
  }
  const handleSearchTask = async () => {
    try {
      const tasks = await SearchTasksFromDb({ title: searchTaskTitle })
      console.log(tasks)

      setSearchTaskTitle('')
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  return (
    <TextField
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearchTask()
        }
      }}
      label="Search task"
      onChange={handleChange}
      value={searchTaskTitle}
      slotProps={{
        htmlInput: { autoComplete: 'off' },
      }}
    />
  )
}
