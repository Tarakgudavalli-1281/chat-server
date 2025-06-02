// components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>ChatGuru</h2>
      <nav>
        <ul style={styles.navList}>
          <li>
            <NavLink 
              to="/chats" 
              style={({ isActive }) => (isActive ? styles.activeLink : styles.navItem)}
            >
              Chats
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/groups" 
              style={({ isActive }) => (isActive ? styles.activeLink : styles.navItem)}
            >
              Groups
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/status" 
              style={({ isActive }) => (isActive ? styles.activeLink : styles.navItem)}
            >
              Status
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/calls" 
              style={({ isActive }) => (isActive ? styles.activeLink : styles.navItem)}
            >
              Calls
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/settings" 
              style={({ isActive }) => (isActive ? styles.activeLink : styles.navItem)}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  sidebar: {
    height: '100vh',
    width: '250px',
    backgroundColor: '#1E1E2F',
    color: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
  },
  title: {
    marginBottom: '40px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    display: 'block',
    padding: '10px 15px',
    color: '#ccc',
    textDecoration: 'none',
    marginBottom: '15px',
    borderRadius: '5px',
  },
  activeLink: {
    display: 'block',
    padding: '10px 15px',
    color: '#fff',
    backgroundColor: '#3B82F6', // blue highlight
    textDecoration: 'none',
    marginBottom: '15px',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};

export default Sidebar;
