import { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

export default function SidebarItem({
  label,
  href,
  icon: Icon,
  onClick,
}: SidebarItemProps) {
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) return onClick();
    router.push(href!);
  }, [href, onClick, router]);
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      {/* Icon */}
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden lg:flex gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
}
