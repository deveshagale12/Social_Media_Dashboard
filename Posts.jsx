import React from 'react';

const posts = [
  { id: 1, title: "New Product Launch", date: "2023-10-12" },
  { id: 2, title: "Weekend Sale!", date: "2023-09-20" },
];

const Posts = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Posts</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-left">Title</th>
              <th className="px-6 py-3 bg-gray-200 text-left">Date</th>
              <th className="px-6 py-3 bg-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b">
                <td className="px-6 py-4">{post.title}</td>
                <td className="px-6 py-4">{post.date}</td>
                <td className="px-6 py-4 text-center">
                  <button className="text-blue-500 mx-2">View</button>
                  <button className="text-green-500 mx-2">Edit</button>
                  <button className="text-red-500 mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;
