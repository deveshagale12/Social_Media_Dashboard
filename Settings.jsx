import React from 'react';

const Settings = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-lg font-semibold">Username</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Username" />
        </div>
        <div>
          <label className="block text-lg font-semibold">Email</label>
          <input type="email" className="w-full p-2 border rounded" placeholder="Email" />
        </div>
        <div>
          <label className="block text-lg font-semibold">Password</label>
          <input type="password" className="w-full p-2 border rounded" placeholder="Password" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
