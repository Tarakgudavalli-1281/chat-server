// pages/StatusPage.jsx
import React, { useState } from 'react';

const StatusPage = () => {
  const [statuses, setStatuses] = useState([
    {
      username: 'User1',
      url: 'https://via.placeholder.com/300x500',
      type: 'image',
    },
  ]);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleAddStatus = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const type = file.type.startsWith('video') ? 'video' : 'image';
    const url = URL.createObjectURL(file);

    const newStatus = {
      username: 'Me', // Or use logged-in user info
      url,
      type,
    };

    setStatuses((prev) => [newStatus, ...prev]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <h2 style={styles.heading}>User Status</h2>
        <label style={styles.addButton}>
          + Add My Status
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleAddStatus}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      <div style={styles.grid}>
        {statuses.map((status, idx) => (
          <div key={idx} style={styles.card} onClick={() => setSelectedStatus(status)}>
            {status.type === 'video' ? (
              <video src={status.url} style={styles.thumb} muted />
            ) : (
              <img src={status.url} style={styles.thumb} alt="status" />
            )}
            <div style={styles.username}>{status.username}</div>
          </div>
        ))}
      </div>

      {selectedStatus && (
        <div style={styles.overlay} onClick={() => setSelectedStatus(null)}>
          <div style={styles.fullContent}>
            {selectedStatus.type === 'video' ? (
              <video src={selectedStatus.url} controls autoPlay style={styles.fullMedia} />
            ) : (
              <img src={selectedStatus.url} alt="status" style={styles.fullMedia} />
            )}
            <button onClick={() => setSelectedStatus(null)} style={styles.closeBtn}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusPage;

const styles = {
  container: {
    padding: '20px',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#3B82F6',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  grid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    cursor: 'pointer',
    textAlign: 'center',
  },
  thumb: {
    width: '150px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px',
    border: '2px solid #3B82F6',
  },
  username: {
    marginTop: '8px',
    fontWeight: 'bold',
  },
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  fullContent: {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
  },
  fullMedia: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    background: '#ff5555',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '50%',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
