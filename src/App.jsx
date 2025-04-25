import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
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
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/platform-setup" element={<PlatformSetup />} />
        <Route path="/ai-agent" element={<AI_Agent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/promoters" element={<Promoters />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/payouts" element={<Payouts />} />
        <Route path="/settings" element={<Settings />} />
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
