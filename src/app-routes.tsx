import { Navigate, Route, Routes } from 'react-router'
import { ProtectedRoute } from './components/routes/protected-route'
import { BaseLayout } from './pages/base-layout'
import { DashboardPage } from './pages/dashboard-page'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<BaseLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}
