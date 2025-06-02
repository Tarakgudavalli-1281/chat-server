// src/components/ChatInput.jsx
import React, { useState } from 'react';

function ChatInput({ onSend }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border-t flex">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600 transition"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;