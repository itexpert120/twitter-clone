import "./globals.css";

import Sidebar from "@/components/Sidebar/Sidebar";
import FollowBar from "@/components/FollowBar";

export const metadata = {
  title: "Twitter Clone",
  description: "Twitter Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background */}
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
      </body>
    </html>
  );
}
