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
  status: 'pending' | 'in-progress' | 'completed'
  created_at: Date
  isDeleted: boolean
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

/*
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
*/