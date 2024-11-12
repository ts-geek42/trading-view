import React from "react";
import { LineData } from "lightweight-charts";
import TradingChartLabel from "@/components/TradingChartLabel";

const HomePage: React.FC = () => {
  const dataSeries1: LineData[] = [
    { time: "2023-11-01", value: 150 },
    { time: "2023-11-02", value: 160 },
    { time: "2023-11-03", value: 158 },
  ];

  const dataSeries2: LineData[] = [
    { time: "2023-11-01", value: 120 },
    { time: "2023-11-02", value: 130 },
    { time: "2023-11-03", value: 135 },
  ];

  const dataSeries3: LineData[] = [
    { time: "2023-11-01", value: 170 },
    { time: "2023-11-02", value: 165 },
    { time: "2023-11-03", value: 160 },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Multiple Line Chart with Legends
      </h1>
      <TradingChartLabel
        seriesData={[
          { data: dataSeries1, color: "#FF0000", label: "Series 1" }, // Red line
          { data: dataSeries2, color: "#00FF00", label: "Series 2" }, // Green line
          { data: dataSeries3, color: "#0000FF", label: "Series 3" }, // Blue line
        ]}
        width={800}
        height={400}
      />
    </div>
  );
};

export default HomePage;
