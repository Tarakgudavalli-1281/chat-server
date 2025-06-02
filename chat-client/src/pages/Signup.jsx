import React from 'react';
import NavBar from '../components/SideBar';

const Signup = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      </div>
    </div>
  );
};

export default Signup;