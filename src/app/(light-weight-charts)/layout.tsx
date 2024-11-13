import { AppSidebar } from "@/components/custom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const page: React.FC<any> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <div className="flex w-full h-full  justify-center">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default page;
