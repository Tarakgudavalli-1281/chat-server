import React from 'react';
import ChatApp from '../components/ChatApp';
import NavBar from '../components/SideBar';

const GroupChat = () => {
  return (
    <div>
      <NavBar />
      <div className="h-screen">
        <ChatApp chatType="group" />
      </div>
    </div>
  );
};

export default GroupChat;
