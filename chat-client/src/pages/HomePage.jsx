// pages/HomePage.jsx
import React, { useState } from 'react';
import { FiSearch, FiMoreVertical, FiVideo, FiPhone } from 'react-icons/fi';
import { BsFillChatDotsFill } from 'react-icons/bs';

const contactList = [
  { name: 'user1', msg: 'hii this is chat guru', time: '29-05-2025' },
  { name: 'user2', msg: 'hii this is chat guru', time: '17:34' },
  { name: 'user3', msg: 'hii this is chat guru', time: '13:22' },
  { name: 'user4', msg: 'hii this is chat guru', time: 'Yesterday' },
];

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(contactList[0]);

  return (
    <div style={styles.container}>
      {/* Left Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarTop}>
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            style={styles.profilePic}
          />
          <div style={styles.sidebarIcons}>
            <BsFillChatDotsFill color="white" size={20} />
          </div>
        </div>

        {/* Search */}
        <div style={styles.searchBar}>
          <FiSearch color="#aaa" />
          <input
            type="text"
            placeholder="Search or start a new chat"
            style={styles.searchInput}
          />
        </div>

        {/* Contact List */}
        <div style={styles.contacts}>
          {contactList.map((user, idx) => (
            <div
              key={idx}
              style={styles.chatItem}
              onClick={() => setSelectedUser(user)}
            >
              <img
                src="https://via.placeholder.com/40"
                alt={user.name}
                style={styles.contactPic}
              />
              <div>
                <div style={styles.chatName}>{user.name}</div>
                <div style={styles.chatMsg}>{user.msg}</div>
              </div>
              <div style={styles.chatTime}>{user.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div style={styles.chatArea}>
        {selectedUser ? (
          <>
            <div style={styles.chatHeader}>
              <div style={styles.chatUser}>
                <img
                  src="https://via.placeholder.com/40"
                  alt="User"
                  style={styles.profilePic}
                />
                <div>
                  <div style={{ fontWeight: 'bold' }}>{selectedUser.name}</div>
                  <div style={{ fontSize: 12, color: '#ccc' }}>
                    Voice Call/Video call
                  </div>
                </div>
              </div>
              <div style={styles.headerIcons}>
                <FiVideo size={18} color="#fff" />
                <FiPhone size={18} color="#fff" />
                <FiMoreVertical size={18} color="#fff" />
              </div>
            </div>

            <div style={styles.chatMessages}>
              <div style={styles.messageBubble}>
                Hello, this is a message from {selectedUser.name}.
              </div>
            </div>

            <div style={styles.chatInput}>
              <input
                type="text"
                placeholder={`Message ${selectedUser.name}`}
                style={styles.inputField}
              />
              <button style={styles.sendButton}>🎤</button>
            </div>
          </>
        ) : (
          <div style={{ padding: 20, color: 'white' }}>Select a user to start chat</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

// Reuse your existing styles below (from your version above)
const styles = {
  container: { display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' },
  sidebar: { width: '30%', backgroundColor: '#202c33', color: 'white', display: 'flex', flexDirection: 'column' },
  sidebarTop: { display: 'flex', justifyContent: 'space-between', padding: '10px 20px', alignItems: 'center' },
  profilePic: { width: 40, height: 40, borderRadius: '50%' },
  sidebarIcons: { display: 'flex', gap: '15px' },
  searchBar: { backgroundColor: '#111b21', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 10 },
  searchInput: { flex: 1, backgroundColor: '#2a3942', border: 'none', padding: '8px 12px', color: 'white', borderRadius: 10, outline: 'none' },
  contacts: { flex: 1, overflowY: 'auto' },
  chatItem: { display: 'flex', alignItems: 'center', padding: '10px 20px', borderBottom: '1px solid #2a3942', cursor: 'pointer', gap: 10, position: 'relative' },
  contactPic: { width: 40, height: 40, borderRadius: '50%' },
  chatName: { fontWeight: 'bold' },
  chatMsg: { fontSize: 12, color: '#aaa' },
  chatTime: { position: 'absolute', right: 20, top: 15, fontSize: 10, color: '#aaa' },
  chatArea: { flex: 1, background: 'linear-gradient(45deg, #121B22, #2a3942)', display: 'flex', flexDirection: 'column' },
  chatHeader: { backgroundColor: '#202c33', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  chatUser: { display: 'flex', gap: 10, alignItems: 'center' },
  headerIcons: { display: 'flex', gap: 15 },
  chatMessages: { flex: 1, padding: '20px', overflowY: 'auto' },
  messageBubble: { backgroundColor: '#005C4B', color: 'white', padding: '10px 15px', marginBottom: 10, maxWidth: '60%', borderRadius: '10px 10px 0 10px', alignSelf: 'flex-end' },
  chatInput: { backgroundColor: '#202c33', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 10 },
  inputField: { flex: 1, backgroundColor: '#2a3942', border: 'none', padding: '10px 15px', borderRadius: 20, color: 'white', outline: 'none' },
  sendButton: { backgroundColor: '#005C4B', color: 'white', padding: '10px', border: 'none', borderRadius: '50%', cursor: 'pointer' },
};
