"use client";
import React from "react";
import Chart from "./Chart";
import { lineSeries } from "../../constants/lineSeries";
import { SeriesType } from "./interfaces";
import { ChartLine } from "lucide-react";

const HistogramChart = () => {
  return (
    <div className="flex flex-col w-[90%] m-10">
      <div className="flex justify-between items-center gap-4 ">
        <ChartLine />
        <h1 className="text-center text-2xl">Histogram Chart</h1>
      </div>
      <Chart
        seriesData={[
          {
            color: "Green",
            data: lineSeries,
            seriesType: SeriesType.Histogram,
          },
        ]}
      />
    </div>
  );
};

export default HistogramChart;
