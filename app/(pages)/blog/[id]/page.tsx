import type { TBlog } from "@/app/types";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetch("http://localhost:3000/api/blog/", { cache: 'no-store' });
  const blogData = await response.json();

  console.log(blogData)

  return blogData.map((blog: TBlog) => ({
    id: blog.id,
  }));
}

const getBlogArticle = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/blog/${id}`, { cache: 'no-store' });
  const blogArticle = await response.json();

  if (response.status === 404) {
    return notFound();
  }

  return blogArticle;
};

const BlogArticlePage = async ({ params }: { params: { id: string } }) => {
  const blogArticle = await getBlogArticle(params.id);

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-[50px]">{blogArticle.title}</h2>
      <p>{blogArticle.content}</p>
    </div>
  );
};

export default BlogArticlePage;
