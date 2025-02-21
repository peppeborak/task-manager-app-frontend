import axios from 'axios'
import {
  LoginRequestInput,
  LoginResponse,
  SignupRequestInput,
  SignupResponse,
} from './types'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const login = async ({
  username,
  password,
}: LoginRequestInput): Promise<LoginResponse> => {
  try {
    const { data } = await api.post('/auth/login', {
      username,
      password,
    })
    return data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const signup = async ({
  username,
  password,
}: SignupRequestInput): Promise<SignupResponse> => {
  try {
    const { data } = await api.post('/auth/signup', {
      username,
      password,
    })
    console.log(data.message)
    return data.message
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export default api
