import React from 'react';
import NavBar from '../components/SideBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">Welcome to the Chat App</h1>
      </div>
    </div>
  );
};

export default Home;