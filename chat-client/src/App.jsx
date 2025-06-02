import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/SideBar';
import { Menu } from 'lucide-react';
import HomePage from './pages/HomePage';

const Groups = () => <div style={{ padding: 20 }}>This is the Groups page</div>;
const Status = () => <div style={{ padding: 20 }}>This is the Status page</div>;
const Calls = () => <div style={{ padding: 20 }}>This is the Calls page</div>;
const Settings = () => <div style={{ padding: 20 }}>This is the Settings page</div>;

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', height: '100vh', position: 'relative' }}>
        {/* Sidebar */}
        {sidebarOpen && <Sidebar toggleSidebar={() => setSidebarOpen(false)} />}

        {/* Menu Button if sidebar is hidden */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            style={{
              position: 'fixed',
              top: 20,
              left: 20,
              background: '#1E1E2F',
              border: 'none',
              borderRadius: '8px',
              padding: '10px',
              zIndex: 1000,
              cursor: 'pointer',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            }}
          >
            <Menu color="#fff" size={24} />
          </button>
        )}

        {/* Main Content */}
        <div style={{ flex: 1, background: '#f0f2f5' }}>
          <Routes>
            <Route path="/chats" element={<HomePage />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/status" element={<Status />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Navigate to="/chats" replace />} />
            <Route path="*" element={<Navigate to="/chats" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
