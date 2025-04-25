import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AI_Agent from './pages/AI_Agent.jsx';
import Campaign from './pages/Campaign.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Leads from './pages/Leads.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Payouts from './pages/Payouts.jsx';
import PlatformSetup from './pages/PlatformSetup.jsx';
import Promoters from './pages/Promoters.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import Settings from './pages/Settings.jsx';

// AnimatedRoutes wrapper to provide location to AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Routes */}
        <Route path="/platform-setup" element={
          <ProtectedRoute>
            <PlatformSetup />
          </ProtectedRoute>
        } />
        <Route path="/ai-agent" element={
          <ProtectedRoute>
            <AI_Agent />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/campaign" element={
          <ProtectedRoute>
            <Campaign />
          </ProtectedRoute>
        } />
        <Route path="/promoters" element={
          <ProtectedRoute>
            <Promoters />
          </ProtectedRoute>
        } />
        <Route path="/leads" element={
          <ProtectedRoute>
            <Leads />
          </ProtectedRoute>
        } />
        <Route path="/payouts" element={
          <ProtectedRoute>
            <Payouts />
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
