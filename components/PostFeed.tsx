"use client";

import usePosts from "@/hooks/usePosts";

import PostItem from "@/components/post/PostItem";
import Loading from "@/app/(site)/loading";
import { useEffect, useState } from "react";

interface PostFeedProps {
  userId?: string;
}

export default function PostFeed({ userId }: PostFeedProps) {
  const [posts, setPosts] = useState<Record<string, any>[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {posts?.map((post: Record<string, any>) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
}
