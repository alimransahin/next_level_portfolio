"use client";

import { useGetBlog } from "@/src/hooks/blog.hook";
import { TBlogPost } from "@/src/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const BlogPage = () => {
  const { handletBlog } = useGetBlog();
  const [blogs, setBlogs] = useState<TBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await handletBlog();
      if (result) {
        setBlogs(result.data);
      }
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/edit-blog/${id}`);
  };

  const handleDelete = (id: string) => {};

  const handleCreate = () => {
    router.push("/admin/create-blog");
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Blog Management</h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Create Blog
        </button>
      </div>

      {isLoading ? (
        <p className="text-center">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="text-center text-gray-500">No data found</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left font-semibold text-gray-600">
                Title
              </th>
              <th className="py-2 px-4 text-left font-semibold text-gray-600">
                Author
              </th>
              <th className="py-2 px-4 text-left font-semibold text-gray-600">
                Date
              </th>
              <th className="py-2 px-4 text-center font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-b border-gray-200">
                <td className="py-3 px-4">{blog.title}</td>
                <td className="py-3 px-4">{blog.author}</td>
                <td className="py-3 px-4">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleEdit(blog._id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BlogPage;
