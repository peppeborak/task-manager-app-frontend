import { useState } from 'react'
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Card,
} from '@mui/material'
import { login, signup } from '../services/api'
import { useNavigate } from 'react-router'

export const SignupPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    if (!username || !password) {
      setError('Both fields are required')
      return
    }
    if (password !== verifyPassword) {
      setError('Passwords does not match')
      return
    }
    try {
      await signup({ username, password })
      const { token } = await login({ username, password })
      localStorage.setItem('token', token)
      navigate('/dashboard')
    } catch (error) {
      setError('Username already taken')
      console.log('Error: ', error)
      return
    }
  }

  return (
    <Container maxWidth="xs">
      <Card sx={{ padding: 4, marginTop: 8, boxShadow: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Signup
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
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
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
            onClick={() => navigate('/login')}
          >
            Already have an account?
          </Typography>
        </Box>
      </Card>
    </Container>
  )
}

export default SignupPage
