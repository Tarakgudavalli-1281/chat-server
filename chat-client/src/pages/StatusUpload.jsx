// src/pages/StatusUpload.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StatusUpload = ({ addStatus }) => {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreviewURL(URL.createObjectURL(selected));
  };

  const handleSubmit = () => {
    if (file) {
      addStatus({
        id: Date.now(),
        type: file.type.startsWith('video') ? 'video' : 'image',
        url: previewURL,
        caption,
        uploader: 'You',
      });
      navigate('/status');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Status</h2>
      <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
      <br /><br />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        style={{ padding: '8px', width: '100%' }}
      />
      <br /><br />
      {previewURL && (
        file.type.startsWith('video') ? (
          <video src={previewURL} width="300" controls />
        ) : (
          <img src={previewURL} width="200" alt="Preview" />
        )
      )}
      <br /><br />
      <button onClick={handleSubmit}>Post Status</button>
    </div>
  );
};

export default StatusUpload;
