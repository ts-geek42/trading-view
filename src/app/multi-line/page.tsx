import React from "react";
import { LineData } from "lightweight-charts";
import TradingChart3 from "@/components/TradingChart3";

const HomePage: React.FC = () => {
  const dataSeries1: LineData[] = [
    { time: "2023-11-01", value: 150 },
    { time: "2023-11-02", value: 160 },
    { time: "2023-11-03", value: 158 },
  ];

  const dataSeries2: LineData[] = [
    { time: "2023-11-03", value: 158 },
    { time: "2023-11-04", value: 168 },
    { time: "2023-11-05", value: 160 },
    { time: "2023-11-06", value: 150 },
  ];

  const dataSeries3: LineData[] = [
    { time: "2023-11-06", value: 150 },
    { time: "2023-11-07", value: 170 },
    { time: "2023-11-08", value: 160 },
    { time: "2023-11-09", value: 158 },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Multiple Line Chart</h1>
      <TradingChart3
        seriesData={[
          { data: dataSeries1, color: "#FF0000" }, // Red line
          { data: dataSeries2, color: "#00FF00" }, // Green line
          { data: dataSeries3, color: "#0000FF" }, // Blue line
        ]}
        width={800}
        height={400}
      />
    </div>
  );
};

export default HomePage;
