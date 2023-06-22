"use client";

import Header from "@/components/Header";
import PostFeed from "@/components/PostFeed";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import { TailSpin } from "react-loader-spinner";

export default function UserView({ params }: { params: { userId: string } }) {
  const { data: fetchedUser, isLoading } = useUser(params.userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <TailSpin
          height="80"
          width="80"
          color="lightblue"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={params.userId as string} />
      <UserBio userId={params.userId as string} />
      <PostFeed userId={params.userId} />
    </>
  );
}
