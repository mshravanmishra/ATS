import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//Landing Page
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Menu from './pages/Menu';

// Auth Pages
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import OtpVerification from './pages/auth/OtpVerification';
import ResetPassword from './pages/auth/ResetPassword';
import SignUp from './pages/auth/SignUp';

// Layout Component
import Layout from './components/shared/Layout';
import ProtectedRoute from './components/shared/ProtectedRoute'; 

// Other Pages
import Tracking from './pages/Tracking';
import AmbulanceDetails from './pages/AmbulanceDetails';
import Requests from './pages/Requests';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

//Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
//import AdminSettings from './pages/admin/Settings'; 
//import AdminUsers from './pages/admin/Users';
//import AdminAmbulances from './pages/admin/Ambulances';
//import AdminRequests from './pages/admin/Requests';
//import AdminReports from './pages/admin/Reports';

// User Dashboard
import UserDashboard from './pages/user/Dashboard';
// Driver Dashboard
import DriverDashboard from './pages/driver/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */} 
        <Route path="/" element={<Layout><Landing /></Layout>} />
        <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
        <Route path="/menu" element={<Layout><Menu /></Layout>} />
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/ambulance/:id" element={<AmbulanceDetails />} />
        <Route path="/requests" element={<Requests />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
         {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["super_admin"]}>
              <Layout role="super_admin" />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        {/*User Routes */}
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Layout role="user" />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserDashboard />} />
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>  

        {/* Driver Routes */}
        <Route
          path="/driver"
          element={
            <ProtectedRoute allowedRoles={["driver"]}>
              <Layout role="driver" />
            </ProtectedRoute>
          }
        >
          <Route index element={<DriverDashboard />} />
          <Route path="dashboard" element={<DriverDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
