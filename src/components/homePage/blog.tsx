const BlogSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-12" id="blog-section">
      {/* Section Header */}
      <h3 className="text-3xl text-center py-4 bg-gradient-to-r from-primary-100 font-bold rounded-md">
        Blog
      </h3>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Blog Post 1 */}
        <div className="flex flex-col bg-default-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Blog Post 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h4 className="text-2xl font-bold text-primary mb-2">
            How to Become a Full-Stack Developer
          </h4>
          <p className="text-default-700 mb-4">
            Learn the skills and technologies needed to become a successful
            full-stack developer.
          </p>
          <a
            href="/blog/full-stack-developer"
            className="text-primary hover:underline mb-4"
          >
            See More
          </a>
          <p className="text-default-500">Published on: Jan 1, 2024</p>
        </div>

        {/* Blog Post 2 */}
        <div className="flex flex-col bg-gradient-to-br from-accent-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Blog Post 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h4 className="text-2xl font-bold text-primary mb-2">
            10 Tips to Improve Your Coding Skills
          </h4>
          <p className="text-default-700 mb-4">
            Discover practical tips and resources to enhance your coding
            abilities.
          </p>
          <a
            href="/blog/coding-tips"
            className="text-primary hover:underline mb-4"
          >
            See More
          </a>
          <p className="text-default-500">Published on: Dec 15, 2023</p>
        </div>

        {/* Blog Post 3 */}
        <div className="flex flex-col bg-gradient-to-br from-accent-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Blog Post 3"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h4 className="text-2xl font-bold text-primary mb-2">
            The Future of Web Development in 2024
          </h4>
          <p className="text-default-700 mb-4">
            Explore upcoming trends and technologies that will shape the future
            of web development.
          </p>
          <a
            href="/blog/future-web-development"
            className="text-primary hover:underline mb-4"
          >
            See More
          </a>
          <p className="text-default-500">Published on: Nov 10, 2023</p>
        </div>

        {/* Add more blog posts below in the same format */}
      </div>

      {/* More Blogs Button */}
      <div className="text-center mt-12">
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
