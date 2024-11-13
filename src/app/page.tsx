"use client";
import React from "react";
import { LineData } from "lightweight-charts";
import dynamic from "next/dynamic";

const HomePage: React.FC = () => {
  const sampleData: any[] = [
    { time: "2023-11-01", value: 150, value1: 170 },
    { time: "2023-11-02", value: 160, value1: 170 },
    { time: "2023-11-03", value: 158, value1: 170 },
    { time: "2023-11-04", value: 180, value1: 170 },
    { time: "2023-11-05", value: 190, value1: 170 },
    { time: "2023-11-06", value: 120, value1: 170 },
    { time: "2023-11-07", value: 100, value1: 170 },
    { time: "2023-11-08", value: 900, value1: 170 },
    { time: "2023-11-09", value: 150, value1: 170 },
    { time: "2023-11-10", value: 110, value1: 170 },

    // Add more data points here
  ];
  const TradingChart = dynamic(() => import("../modules/test/TradingChart"), {
    ssr: false,
  });
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Trading Chart</h1>
      <TradingChart data={sampleData} width={800} height={400} />
    </div>
  );
};

export default HomePage;
