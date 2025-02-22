import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'
import { ProtectedRoute } from './components/routes/ProtectedRoute'
import DashboardPage from './pages/dashboard-page'

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
