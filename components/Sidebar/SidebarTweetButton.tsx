"use client";

import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SidebarTweetButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>

      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-80 cursor-pointer transition">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
}
