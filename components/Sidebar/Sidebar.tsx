import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

export default function Sidebar() {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      {/* Items Alignment */}
      <div className="flex flex-col items-end">
        {/* Gap between elements & max width */}
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />

          {/* Links */}
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}

          {/* Auth Buttons */}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />

          {/* Tweet Button */}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
}
