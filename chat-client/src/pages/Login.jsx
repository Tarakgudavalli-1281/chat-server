import React from 'react';
import NavBar from '../components/SideBar';

const Login = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
      </div>
    </div>
  );
};

export default Login;