"use client";
import { useGetBlog } from "@/src/hooks/blog.hook";
import { TBlogPost } from "@/src/types";
import { useEffect, useState } from "react";

const BlogSection = () => {
  const { handletBlog } = useGetBlog();
  const [blogs, setBlogs] = useState<TBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await handletBlog();
      if (result) {
        setBlogs(result.data);
      }
      setIsLoading(false);
    };
    fetchBlogs();
  }, [handletBlog]);
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="max-w-screen-xl mx-auto" id="blog-section">
      {/* Section Header */}
      <h3
        className="text-3xl text-center py-4 bg-gradient-to-r from-primary-100 to-secondary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Blog
      </h3>

      {/* Loading State */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {/* Skeleton placeholders for loading state */}
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-200 p-6 rounded-xl shadow-lg animate-pulse"
            >
              <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
              <div className="bg-gray-300 h-6 rounded mb-2"></div>
              <div className="bg-gray-300 h-4 rounded mb-4"></div>
              <div className="bg-gray-300 h-4 rounded mb-4"></div>
              <div className="bg-gray-300 h-4 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {/* Blog Posts Grid */}
          {blogs.map((blogPost) => (
            <div
              key={blogPost._id}
              className="flex flex-col bg-default-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={blogPost.imageUrl}
                alt={blogPost.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-2xl font-bold text-primary mb-2">
                {blogPost.title}
              </h4>
              <p className="text-default-700 mb-4">
                {blogPost.content.substring(0, 100)}...
                <a
                  href={`/blog/${blogPost._id}`}
                  className="text-primary hover:underline "
                >
                  See More
                </a>
              </p>

              <p className="text-default-500">
                Published on: {formatDate(blogPost.createdAt)}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* More Blogs Button */}
      <div className="text-center my-4">
        <a
          href="/blog"
          className="bg-gradient-to-tr from-primary to-secondary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-700 transition-colors duration-300"
        >
          More Blogs
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
