import SwapVertIcon from '@mui/icons-material/SwapVert'
import { IconButton } from '@mui/material'


type Props = {
  setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>
}

export const SortTasksByCreatedButton = ({ setSortOrder }: Props) => {
  
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <IconButton onClick={toggleSortOrder}>
      <SwapVertIcon />
    </IconButton>
  )
}
