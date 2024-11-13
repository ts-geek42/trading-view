"use client";
import { barChartData } from "@/constants";
import { ChartCandlestick } from "lucide-react";
import React from "react";
import Chart from "./Chart";
import { SeriesType } from "./interfaces";

const CandleStickChart = () => {
  return (
    <div className="flex flex-col w-[90%] m-10">
      <div className="flex justify-between items-center gap-4 ">
        <ChartCandlestick />
        <h1 className="text-center text-2xl">Candlestick Chart</h1>
      </div>
      <Chart
        seriesData={[
          {
            color: "red",
            data: barChartData,
            seriesType: SeriesType.Candlestick,
          },
        ]}
      />
    </div>
  );
};

export default CandleStickChart;
