import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      <h2 className="text-xl font-bold">Social Media Dashboard</h2>
      <div>
        <button className="text-gray-700 mx-2">Notifications</button>
        <button className="text-gray-700 mx-2">Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
