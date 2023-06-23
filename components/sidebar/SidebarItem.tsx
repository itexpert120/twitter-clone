import { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter, usePathname } from "next/navigation";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

export default function SidebarItem({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}: SidebarItemProps) {
  const currentUrl = usePathname();
  const isActive = href === currentUrl;
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) return onClick();

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href!);
    }
  }, [auth, currentUser, href, loginModal, onClick, router]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      {/* Icon */}
      <div
        className={`${
          isActive ? "bg-slate-300 bg-opacity-10" : ""
        } relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden`}
      >
        <Icon size={28} color="white" />
      </div>
      <div
        className={`${
          isActive ? "bg-slate-300 bg-opacity-10" : ""
        } relative hidden lg:flex gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center`}
      >
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
}
