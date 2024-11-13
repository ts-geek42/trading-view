"use client";
import { lineSeries } from "@/constants";
import { ChartArea } from "lucide-react";
import React from "react";
import Chart from "./Chart";
import { SeriesType } from "./interfaces";

const AreaChart = () => {
  return (
    <div className="flex flex-col w-[90%] m-10">
      <div className="flex justify-between items-center gap-4 ">
        <ChartArea />
        <h1 className="text-center text-2xl">Area Chart</h1>
      </div>
      <Chart
        seriesData={[
          { color: "red", data: lineSeries, seriesType: SeriesType.Area },
        ]}
      />
    </div>
  );
};

export default AreaChart;
