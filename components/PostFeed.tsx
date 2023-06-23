"use client";

import usePosts from "@/hooks/usePosts";

import PostItem from "@/components/post/PostItem";
import Loading from "@/app/(site)/users/[userId]/loading";

interface PostFeed {
  userId?: string;
}

export default function PostFeed({ userId }: PostFeed) {
  const { data: posts = [], isLoading } = usePosts(userId);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
}
