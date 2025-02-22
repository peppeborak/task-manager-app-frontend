import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

export const LogoutButton = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
      localStorage.removeItem('token')
      navigate('/') // Navigate to the loginscreen
    }


  return (
    <Button onClick={handleLogout}>Logout</Button>
  )
}
