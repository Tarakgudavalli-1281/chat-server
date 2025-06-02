import React from 'react';
import ChatApp from '../components/ChatApp';
import NavBar from '../components/SideBar';

const SingleChat = () => {
  return (
    <div>
      <NavBar />
      <div className="h-screen">
        <ChatApp chatType="single" />
      </div>
    </div>
  );
};

export default SingleChat;