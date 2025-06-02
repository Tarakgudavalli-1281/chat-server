import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react'; // Menu icon (hamburger)

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div style={styles.sidebar}>
      {/* Menu Button inside Sidebar */}
      <div style={styles.menuWrapper}>
        <button onClick={toggleSidebar} style={styles.menuButton}>
          <Menu color="#fff" size={28} />
        </button>
      </div>

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
    position: 'relative',
  },
  menuWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  menuButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  title: {
    marginTop: '50px',
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
    backgroundColor: '#3B82F6',
    textDecoration: 'none',
    marginBottom: '15px',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};

export default Sidebar;
