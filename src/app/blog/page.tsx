import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <>
      {data?.map((item: any) => (
        <div key={item?.id}>
          <Link href={`/blog/${item?.id}`}>{item?.title}</Link>
        </div>
      ))}
    </>
  );
};

export default Blog;
