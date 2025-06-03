// pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { FiSearch, FiMoreVertical, FiVideo, FiPhone } from 'react-icons/fi';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const contactList = [
  { name: 'USER-1', msg: 'https://youtube.com...', time: '29-05-2025' },
  { name: 'USER-2', msg: 'Can You Give the navbar...', time: '17:34' },
  { name: 'USER-3', msg: 'https://youtube.com/shorts/abc', time: '13:22' },
  { name: 'USER-4', msg: 'You: Sticker', time: 'Yesterday' },
];

const initialMessages = {
  'USER-1': [{ sender: 'USER-1', text: 'Hey! Check this out!', time: '10:00' }],
  'USER-2': [{ sender: 'me', text: 'Sure, what do you need?', time: '12:00' }],
  'USER-3': [{ sender: 'USER-3', text: 'Look at this link', time: '13:22' }],
  'USER-4': [{ sender: 'me', text: 'Cool sticker!', time: 'Yesterday' }],
};

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(contactList[0]);
  const [search, setSearch] = useState('');
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const updated = [...(messages[selectedUser.name] || []), { sender: 'me', text: input, time }];
    setMessages({ ...messages, [selectedUser.name]: updated });
    setInput('');
    setTyping(false);
  };

  const filteredContacts = contactList.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (input.trim()) setTyping(true);
    else setTyping(false);
  }, [input]);

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarTop}>
          <img src="https://via.placeholder.com/40" alt="User" style={styles.profilePic} />
          <div style={styles.sidebarIcons}>
            <BsFillChatDotsFill color="white" size={20} />
          </div>
        </div>
        <div style={styles.searchBar}>
          <FiSearch color="#aaa" />
          <input
            type="text"
            placeholder="Search or start a new chat"
            style={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div style={styles.contacts}>
          {filteredContacts.map((user, idx) => (
            <div
              key={idx}
              style={styles.chatItem}
              onClick={() => setSelectedUser(user)}
            >
              <img src="https://via.placeholder.com/40" alt={user.name} style={styles.contactPic} />
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
                <img src="https://via.placeholder.com/40" alt="User" style={styles.profilePic} />
                <div>
                  <div style={{ fontWeight: 'bold' }}>{selectedUser.name}</div>
                  <div style={{ fontSize: 12, color: '#ccc' }}>Voice Call/Video call</div>
                </div>
              </div>
              <div style={styles.headerIcons}>
                <FiVideo size={18} color="#fff" />
                <FiPhone size={18} color="#fff" />
                <FiMoreVertical size={18} color="#fff" />
              </div>
            </div>

            <div style={styles.chatMessages}>
              <AnimatePresence>
                {messages[selectedUser.name]?.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      ...styles.messageBubble,
                      ...(msg.sender === 'me'
                        ? styles.senderBubble
                        : styles.receiverBubble),
                    }}
                  >
                    {msg.text}
                    <div style={styles.timestamp}>{msg.time}</div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1 }}
                  style={styles.typingIndicator}
                >
                  Typing...
                </motion.div>
              )}
            </div>

            <div style={styles.chatInput}>
              <input
                type="text"
                placeholder={`Message ${selectedUser.name}`}
                style={styles.inputField}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button style={styles.sendButton} onClick={handleSend}>
                🎤
              </button>
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

// Updated Styles
const styles = {
  container: { display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' },
  sidebar: {
    width: '30%',
    backgroundColor: '#202c33',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #2a3942',
  },
  sidebarTop: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    alignItems: 'center',
  },
  profilePic: { width: 40, height: 40, borderRadius: '50%' },
  sidebarIcons: { display: 'flex', gap: '15px' },
  searchBar: {
    backgroundColor: '#111b21',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#2a3942',
    border: 'none',
    padding: '8px 12px',
    color: 'white',
    borderRadius: 10,
    outline: 'none',
  },
  contacts: { flex: 1, overflowY: 'auto' },
  chatItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '1px solid #2a3942',
    cursor: 'pointer',
    gap: 10,
    position: 'relative',
  },
  contactPic: { width: 40, height: 40, borderRadius: '50%' },
  chatName: { fontWeight: 'bold' },
  chatMsg: { fontSize: 12, color: '#aaa' },
  chatTime: {
    position: 'absolute',
    right: 20,
    top: 15,
    fontSize: 10,
    color: '#aaa',
  },
  chatArea: {
    flex: 1,
    background: 'linear-gradient(45deg, #121B22, #2a3942)',
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    backgroundColor: '#202c33',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2a3942',
  },
  chatUser: { display: 'flex', gap: 10, alignItems: 'center' },
  headerIcons: { display: 'flex', gap: 15 },
  chatMessages: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  messageBubble: {
    padding: '10px 15px',
    maxWidth: '60%',
    borderRadius: 10,
    position: 'relative',
    wordBreak: 'break-word',
    fontSize: 14,
  },
  senderBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#005C4B',
    color: 'white',
    borderRadius: '10px 10px 0 10px',
  },
  receiverBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#262d31',
    color: '#ddd',
    borderRadius: '10px 10px 10px 0',
  },
  timestamp: {
    fontSize: 10,
    color: '#ccc',
    position: 'absolute',
    bottom: -15,
    right: 10,
  },
  typingIndicator: {
    fontSize: 12,
    color: '#aaa',
    marginLeft: 10,
  },
  chatInput: {
    backgroundColor: '#202c33',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  inputField: {
    flex: 1,
    backgroundColor: '#2a3942',
    border: 'none',
    padding: '10px 15px',
    borderRadius: 20,
    color: 'white',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#005C4B',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};
