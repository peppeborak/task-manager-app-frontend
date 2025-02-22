import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

export const LogoutButton = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
      console.log('Signing out')
      localStorage.removeItem('token')
      navigate('/') // Navigate to the loginscreen
    }


  return (
    <Button onClick={handleLogout}>Logout</Button>
  )
}
