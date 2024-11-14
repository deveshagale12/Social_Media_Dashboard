import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="mt-10">
        <NavLink to="/" className="block py-2.5 px-4 text-white hover:bg-gray-700">Overview</NavLink>
        <NavLink to="/analytics" className="block py-2.5 px-4 text-white hover:bg-gray-700">Analytics</NavLink>
        <NavLink to="/posts" className="block py-2.5 px-4 text-white hover:bg-gray-700">Posts</NavLink>
        <NavLink to="/messages" className="block py-2.5 px-4 text-white hover:bg-gray-700">Messages</NavLink>
        <NavLink to="/settings" className="block py-2.5 px-4 text-white hover:bg-gray-700">Settings</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
