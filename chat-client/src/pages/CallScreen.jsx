import React from 'react';
import NavBar from '../components/SideBar';

const CallScreen = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Call In Progress</h2>
      </div>
    </div>
  );
};

export default CallScreen;