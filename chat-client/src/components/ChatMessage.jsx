// src/components/ChatMessage.jsx
import React from 'react';

function ChatMessage({ message }) {
  const isUser = message.sender === 'You';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-xs ${
          isUser
            ? 'bg-indigo-100 text-indigo-900'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        <span className="font-semibold">{message.sender}:</span> {message.text}
      </div>
    </div>
  );
}

export default ChatMessage;
