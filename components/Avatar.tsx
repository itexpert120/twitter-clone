import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

export default function Avatar({ userId, isLarge, hasBorder }: AvatarProps) {
  const { data: fetchedUser } = useUser(userId);
  const router = useRouter();

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`

    hover:opacity-90
    cursor-pointer
    relative
  `}
    >
      <Image
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        height={isLarge ? 128 : 48}
        width={isLarge ? 128 : 48}
        alt="avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || "/images/placeholderimage.png"}
        className={`
        ${hasBorder ? "border-4 border-bla" : ""}
        `}
      />
    </div>
  );
}
