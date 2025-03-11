import { QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {
  AddTaskRequestInput,
  AddTaskResponse,
  LoginRequestInput,
  LoginResponse,
  QueryResponse,
  SignupRequestInput,
  SignupResponse,
  Task,
  UpdateTaskRequestInput,
  UpdateTaskResponse,
} from './types'


const apiUrl = process.env.REACT_APP_API_URL

const instance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const queryClient = new QueryClient()

export const login = async ({
  username,
  password,
}: LoginRequestInput): Promise<LoginResponse> => {
  const { data } = await instance.post('/auth/login', {
    username,
    password,
  })
  return data
}

export const signup = async ({
  username,
  password,
}: SignupRequestInput): Promise<SignupResponse> => {
  const { data } = await instance.post('/auth/signup', {
    username,
    password,
  })
  return data.message
}

export const useGetTasks = (): QueryResponse<Task[]> => {
  return useQuery({
    queryKey: ['tasks', localStorage.getItem('token')],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/tasks`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      const json = await response.json()
      return json
    },
  }) as QueryResponse<Task[]>
}

export const invalidateTasks = async (): Promise<void> => {
  await queryClient.refetchQueries({
    queryKey: ['tasks', localStorage.getItem('token')],
    type: 'active',
    exact: true,
  })
}

export const addTask = async ({
  title,
}: AddTaskRequestInput): Promise<AddTaskResponse> => {
  const token = localStorage.getItem('token')
  const { data } = await instance.post(
    '/tasks',
    {
      title,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return data.task
}


export const updateTask = async ({
  taskId,
  updatedTitle,
  updatedPriority,
  updatedCategory,
  updatedIsCompleted,
}: UpdateTaskRequestInput): Promise<UpdateTaskResponse> => {
  const token = localStorage.getItem('token')
  const { data } = await instance.put(
    `/tasks/${taskId}`,
    {
      updatedTitle,
      updatedPriority,
      updatedCategory,
      updatedIsCompleted,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return data.updatedTask
}

export const deleteTask = async ({
  taskId,
}: UpdateTaskRequestInput): Promise<UpdateTaskResponse> => {
  const token = localStorage.getItem('token')
  const { data } = await instance.delete(`/tasks/${taskId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return data.message
}
