// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/SideBar';

// Dummy page components - you can replace these with your real ones
const Chats = () => <div style={{ padding: 20 }}>This is the Chats page</div>;
const Groups = () => <div style={{ padding: 20 }}>This is the Groups page</div>;
const Status = () => <div style={{ padding: 20 }}>This is the Status page</div>;
const Calls = () => <div style={{ padding: 20 }}>This is the Calls page</div>;
const Settings = () => <div style={{ padding: 20 }}>This is the Settings page</div>;

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, background: '#f0f2f5', minHeight: '100vh' }}>
          <Routes>
            <Route path="/chats" element={<Chats />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/status" element={<Status />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Navigate to="/chats" replace />} /> {/* Redirect to /chats */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
