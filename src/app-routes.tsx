import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'
import { DashboardPage } from './pages/dashboard-page'
import { ProtectedRoute } from './components/ProtectedRoute'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/login" />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}
