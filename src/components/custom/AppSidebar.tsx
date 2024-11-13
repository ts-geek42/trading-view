import {
  ChartCandlestick,
  ChartLine,
  BarChartHorizontal,
  ChartArea,
  ChartBar,
  LineChartIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Area",
    url: "/area",
    icon: ChartArea,
  },
  {
    title: "Bar",
    url: "/bar",
    icon: ChartBar,
  },
  {
    title: "Baseline",
    url: "/baseline",
    icon: LineChartIcon,
  },
  {
    title: "CandleStick",
    url: "/candle-stick",
    icon: ChartCandlestick,
  },
  {
    title: "Histogram",
    url: "/histogram",
    icon: BarChartHorizontal,
  },
  {
    title: "Line",
    url: "/line",
    icon: ChartLine,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Lightweight Charts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
export default AppSidebar;
