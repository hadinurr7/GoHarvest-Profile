import React, { FC } from "react";
import BlogCard from "./BlogCard";
import { Blog } from "@/types/blog";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: FC<BlogListProps> = ({ blogs }) => {
  return (
    <section className="container mx-auto">
      <h2 className="flex items-center text-start text-3xl font-bold md:text-4xl mb-10">
        <span className="mr-3">📖</span> Recent Posts
      </h2>
      <div className="my-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <div key={index} className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
