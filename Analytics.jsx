import React from 'react';

const Analytics = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Analytics</h2>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <p className="text-lg font-semibold">Followers Growth</p>
        {/* Insert chart or analytics component here */}
        <div className="mt-4 bg-gray-200 h-64"></div>
      </div>
    </div>
  );
};

export default Analytics;
