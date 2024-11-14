import React from 'react';

const Overview = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-500 p-6 rounded-lg text-white">
          <h3 className="text-lg">Total Followers</h3>
          <p className="text-3xl font-bold">12.5K</p>
        </div>
        <div className="bg-green-500 p-6 rounded-lg text-white">
          <h3 className="text-lg">Engagement Rate</h3>
          <p className="text-3xl font-bold">5.8%</p>
        </div>
        <div className="bg-purple-500 p-6 rounded-lg text-white">
          <h3 className="text-lg">Likes</h3>
          <p className="text-3xl font-bold">2.3K</p>
        </div>
        <div className="bg-yellow-500 p-6 rounded-lg text-white">
          <h3 className="text-lg">Shares</h3>
          <p className="text-3xl font-bold">1.2K</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
