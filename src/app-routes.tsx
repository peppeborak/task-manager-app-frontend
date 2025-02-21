import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'


export function AppRoutes() {
  return (
    <Routes>
      <Route index path="/login" element={<LoginPage />} />
      <Route index path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
