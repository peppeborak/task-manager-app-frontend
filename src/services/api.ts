import axios from 'axios'
import {
  deleteTaskInput,
  LoginRequestInput,
  LoginResponse,
  SearchTaskByTitleInput,
  SignupRequestInput,
  SignupResponse,
  UpdateTaskCategoryInput,
  updateTaskPriorityInput,
  updateTaskStatusInput,
} from './types'
import { Task } from '../queries'


const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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

export const SearchTasksFromDb = async ({
  title,
}: SearchTaskByTitleInput): Promise<Task[]> => {
  try {
    const token = localStorage.getItem('token')
    const response = await api.get(`/tasks/search?title=${title}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const updateCategoryToDb = async ({
  id,
  updatedCategory,
}: UpdateTaskCategoryInput): Promise<Task> => {
  try {
    const token = localStorage.getItem('token')
    const response = await api.put(
      `/tasks/${id}`,
      { updatedCategory },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const updateStatusToDb = async ({
  id,
  updatedStatus,
}: updateTaskStatusInput): Promise<Task> => {
  try {
    const token = localStorage.getItem('token')
    const response = await api.put(
      `/tasks/${id}`,
      { updatedStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const updatePriorityToDb = async ({
  id,
  updatedPriority,
}: updateTaskPriorityInput): Promise<Task> => {
  try {
    const token = localStorage.getItem('token')
    const response = await api.put(
      `/tasks/${id}`,
      { updatedPriority },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const deleteTaskToDb = async ({
  id,
}: deleteTaskInput): Promise<void> => {
  try {
    const token = localStorage.getItem('token')
    const response = await api.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export default api
