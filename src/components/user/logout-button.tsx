import { MenuItem } from '@mui/material'
import { useNavigate } from 'react-router'


export const LogoutButton = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
      localStorage.removeItem('token')
      navigate('/')
    }


  return (
    <>
    <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </>
  )
}
