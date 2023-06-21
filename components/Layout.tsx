import FollowBar from "./FollowBar";
import Sidebar from "./Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen bg-black">
      {/* Container */}
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        {/* Grid of 4 Columns */}
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          {/* Actual Content */}
          <div className="col-span-3 lg:col-span-2 border-x border-neutral-800">
            {children}
          </div>
          {/* Desktop Only - Follow Bar */}
          <FollowBar />
        </div>
      </div>
    </div>
  );
}
