import { QueryClient, useQuery } from '@tanstack/react-query'
// dotenv funkar inte

export type QueryResponse<T> = {
  data: T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
  isPending: boolean
  isFetching: boolean
}

export type Task = {
  id: number
  userId: number
  title: string
  priority: 'low' | 'medium' | 'high'
  category: string | null
  status: string //'pending' | 'in-progress' | 'completed'
  created_at: Date
  isDeleted: boolean
}

export type SearchTaskByTitleInput = {
  title: string
}

export type UpdateTaskCategoryInput = {
  id: number
  updatedCategory: 'home' | 'work' | 'hobby'
}

export type NewTask = {
  title: string
}

export type UpdateTask = {
  updatedTitle?: string
  updatedCategory?: string
}

export const queryClient = new QueryClient()

export const useGetTasks = (): QueryResponse<Task[]> => {
  return useQuery({
    queryKey: ['tasks', localStorage.getItem('token')],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/v1/tasks`, {
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

export const useSearchTasks = ({
  title,
}: SearchTaskByTitleInput): QueryResponse<Task[]> => {
  return useQuery({
    queryKey: ['tasks', localStorage.getItem('token')],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/v1/tasks/search?title=${title}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      const json = await response.json()
      return json
    },
  }) as QueryResponse<Task[]>
}

export const updateTaskCategory = ({
  id,
  updatedCategory,
}: UpdateTaskCategoryInput): QueryResponse<Task> => {
  return useQuery({
    queryKey: ['tasks', localStorage.getItem('token')],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          updatedCategory,
        }),
      })
      const json = await response.json()
      return json
    },
  }) as QueryResponse<Task>
}

export const newTask = async (
  newTask: NewTask
): Promise<QueryResponse<Task>> => {
  const response = await fetch(`http://localhost:3000/api/v1/tasks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(newTask),
  })
  const json = await response.json()
  return json
}

export const updateTask = async (
  taskId: number,
  updatedTask: UpdateTask
): Promise<QueryResponse<Task>> => {
  const response = await fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(updatedTask),
  })
  const json = await response.json()
  return json
}
