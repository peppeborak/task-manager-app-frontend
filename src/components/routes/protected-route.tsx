import { jwtDecode } from 'jwt-decode'
import { Navigate, Outlet } from 'react-router'


const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  if (!token) return false

  try {
    const decoded: { exp: number } = jwtDecode(token)
    return decoded.exp * 1000 > Date.now()
  } catch {
    return false
  }
}

export function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />
}
