import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './pages/Login-page'

export function AppRoutes() {
  return (
    <Routes>
      <Route index path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
