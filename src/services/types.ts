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
