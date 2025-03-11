import { TextField } from '@mui/material'
import React from 'react'


type Props = {
  searchTaskTitle: string
  setSearchTaskTitle: React.Dispatch<React.SetStateAction<string>>
}

export const SearchTaskInputField = ({
  searchTaskTitle,
  setSearchTaskTitle,
}: Props) => {
  const handleSearchOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTaskTitle(event.target.value)
  }

  return (
    <TextField
      id="search input field"
      label="Search for tasks..."
      variant="standard"
      size="small"
      margin="none"
      sx={{
        flexGrow: 1,
        flexShrink: 1,
      }}
      value={searchTaskTitle}
      onChange={handleSearchOnchange}
    />
  )
}
