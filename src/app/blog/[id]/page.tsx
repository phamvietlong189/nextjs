import React from "react";
import { notFound } from "next/navigation";

const getData = async (id: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

export const generateMetadata = async ({ params }: { params: any }) => {
  const post = await getData(params?.id);
  return {
    title: post?.title,
  };
};

const DetailBlog = async ({ params }: { params: any }) => {
  const data = await getData(params?.id);

  return <div>{data?.title}</div>;
};

export default DetailBlog;
