import React from "react";
import { LineData, HistogramData } from "lightweight-charts";
import TradingChart4 from "@/components/TradingChart4";

const HomePage: React.FC = () => {
  const priceData: LineData[] = [
    { time: "2023-10-01", value: 150 },
    { time: "2023-10-02", value: 155 },
    { time: "2023-10-03", value: 145 },
    { time: "2023-10-04", value: 160 },
  ];

  const ema21Data: LineData[] = [
    { time: "2023-10-01", value: 148 },
    { time: "2023-10-02", value: 152 },
    { time: "2023-10-03", value: 149 },
    { time: "2023-10-04", value: 155 },
  ];

  const ema50Data: LineData[] = [
    { time: "2023-10-01", value: 145 },
    { time: "2023-10-02", value: 150 },
    { time: "2023-10-03", value: 148 },
    { time: "2023-10-04", value: 153 },
  ];

  const volumeData: HistogramData[] = [
    { time: "2023-10-01", value: 200000, color: "#26a69a" },
    { time: "2023-10-02", value: 250000, color: "#26a69a" },
    { time: "2023-10-03", value: 180000, color: "#ef5350" },
    { time: "2023-10-04", value: 300000, color: "#26a69a" },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Trading Chart with Multiple Lines and Volume
      </h1>
      <TradingChart4
        lineSeries={[
          { data: priceData, color: "#4CAF50", width: 2 },
          { data: ema21Data, color: "#FF9800", width: 1 },
          { data: ema50Data, color: "#2196F3", width: 1 },
        ]}
        volumeSeries={{ data: volumeData }}
        width={900}
        height={500}
      />
    </div>
  );
};

export default HomePage;
