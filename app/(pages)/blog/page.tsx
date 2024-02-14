import type { TBlog } from "@/app/types";
import Link from "next/link";
import React from "react";

const getBlogData = async () => {
  const response = await fetch('http://localhost:3000/api/blog', { cache: 'no-store' });
  const blogData = await response.json();
  return blogData;
};

const page = async () => {
  const blogData = await getBlogData();

  return (
    <div className="container mx-auto py-[50px]">
      <div className="grid grid-cols-12 gap-3">
        {blogData.map((blog: TBlog) => (
          <div className="col-span-4 border border-black rounded p-5" key={blog.id}>
            <Link href={`/blog/${blog.id}`} className="w-full">
              <h2>{blog.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
