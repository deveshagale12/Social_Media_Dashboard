import React from 'react';

const messages = [
  { id: 1, sender: "John Doe", message: "Hello! I love your posts!", date: "2023-11-01" },
  { id: 2, sender: "Jane Smith", message: "Can you help me with a project?", date: "2023-10-29" },
];

const Messages = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Messages</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id} className="bg-gray-100 p-4 rounded-lg mb-4">
            <p><strong>{msg.sender}</strong> - {msg.date}</p>
            <p>{msg.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
