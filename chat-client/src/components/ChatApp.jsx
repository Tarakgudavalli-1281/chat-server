import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './SideBar';

// Dummy components for pages\
const Chats = () => <div>Chats Page</div>;
const Groups = () => <div>Groups Page</div>;
const Status = () => <div>Status Page</div>;
const Calls = () => <div>Calls Page</div>;
const Settings = () => <div>Settings Page</div>;

const ChatApp = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/chats" element={<Chats />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/status" element={<Status />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Chats />} /> {/* default route */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default ChatApp;
