import { NextResponse } from "next/server";
import blogData from "@/app/api/blog/blog-data.json";

const GET = () => {
  return NextResponse.json(blogData);
};

export { GET };
