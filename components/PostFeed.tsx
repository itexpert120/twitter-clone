"use client";

import usePosts from "@/hooks/usePosts";

import PostItem from "@/components/post/PostItem";

interface PostFeed {
  userId?: string;
}

export default function PostFeed({ userId }: PostFeed) {
  const { data: posts = [] } = usePosts(userId);
  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
}
