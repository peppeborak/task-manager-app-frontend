import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Card,
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { login } from '../queries/queries'


export const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    if (!username || !password) {
      setError('Both fields are required')
      return
    }
    try {
      const { token } = await login({ username, password })
      localStorage.setItem('token', token)
      navigate('/dashboard')
    } catch (error) {
      setError('Wrong username or password')
      console.log('Error: ', error)
      return
    }
  }

  return (
    <Container maxWidth="xs">
      <Card sx={{ padding: 4, marginTop: 8, boxShadow: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
          >
            Login
          </Button>
          <Typography
            align="center"
            sx={{
              '&:hover': {
                color: 'lightblue',
                cursor: 'pointer',
              },
            }}
            onClick={() => navigate('/signup')}
          >
            Don't have an account?
          </Typography>
        </Box>
      </Card>
    </Container>
  )
}

export default LoginPage
