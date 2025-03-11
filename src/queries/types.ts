export type Task = {
  id: number
  userId: number
  title: string
  priority: 'low' | 'medium' | 'high'
  category: string | null
  created_at: Date
  isCompleted: boolean
  isDeleted: boolean
}

export type LoginRequestInput = {
  username: string
  password: string
}

export type LoginResponse = {
  token: string
}

export type SignupRequestInput = {
  username: string
  password: string
}

export type SignupResponse = {
  message: string
}

export type QueryResponse<T> = {
  data: T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
  isPending: boolean
  isFetching: boolean
}

export type AddTaskRequestInput = {
  title: string
}

export type AddTaskResponse = {
  userId: number
  id: number
  title: string
}

export type UpdateTaskRequestInput = {
  taskId: number
  updatedTitle?: string
  updatedPriority?: 'low' | 'medium' | 'high'
  updatedCategory?: string | null
  updatedIsCompleted?: boolean
}

export type UpdateTaskResponse = {
  updatedTask: Task
}

export type DeleteTaskRequestInput = {
  taskId: number
}

export type DeleteTaskResponse = {
  message: string
}
