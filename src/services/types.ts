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

export type SearchTaskByTitleInput = {
  title: string
}

export type UpdateTaskCategoryInput = {
  id: number
  updatedCategory: string
}

export type updateTaskStatusInput = {
  id: number
  updatedStatus: string
}

export type updateTaskPriorityInput = {
  id: number
  updatedPriority: string
}

export type deleteTaskInput = {
  id: number
}