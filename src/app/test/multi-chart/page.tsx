import React from "react";
import { LineData, BarData } from "lightweight-charts";
import TradingChart2 from "@/components/test/TradingChart2";

const HomePage: React.FC = () => {
  const lineData: LineData[] = [
    { time: "2023-11-01", value: 150 },
    { time: "2023-11-02", value: 160 },
    { time: "2023-11-03", value: 158 },
  ];

  const barData: BarData[] = [
    { time: "2023-11-01", open: 150, high: 160, low: 140, close: 155 },
    { time: "2023-11-02", open: 155, high: 165, low: 150, close: 160 },
    { time: "2023-11-03", open: 160, high: 170, low: 155, close: 158 },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Trading Charts</h1>

      {/* Line Chart */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
        <TradingChart2
          data={lineData}
          chartType="line"
          width={800}
          height={400}
        />
      </div>

      {/* Bar Chart */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Bar Chart</h2>
        <TradingChart2
          data={barData}
          chartType="bar"
          width={800}
          height={400}
        />
      </div>
    </div>
  );
};

export default HomePage;
