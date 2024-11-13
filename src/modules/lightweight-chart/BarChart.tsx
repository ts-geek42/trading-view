"use client";
import React from "react";
import Chart from "./Chart";
import { SeriesType } from "./interfaces";
import { ChartBar } from "lucide-react";
import { barChartData } from "@/constants";

const BarChart = () => {
  return (
    <div className="flex flex-col w-[90%] m-10">
      <div className="flex justify-between items-center gap-4 ">
        <ChartBar />
        <h1 className="text-center text-2xl">Bar Chart</h1>
      </div>
      <Chart
        seriesData={[
          { color: "blue", data: barChartData, seriesType: SeriesType.Bar },
        ]}
      />
    </div>
  );
};

export default BarChart;
