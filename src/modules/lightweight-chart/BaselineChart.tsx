"use client";
import React from "react";
import Chart from "./Chart";
import { lineSeries } from "../../constants/lineSeries";
import { SeriesType } from "./interfaces";
import { LineChartIcon } from "lucide-react";

const BaselineChart = () => {
  return (
    <div className="flex flex-col w-[90%] m-10">
      <div className="flex justify-between items-center gap-4 ">
        <LineChartIcon />
        <h1 className="text-center text-2xl">Baseline Chart</h1>
      </div>
      <Chart
        seriesData={[
          {
            color: "red",
            data: lineSeries,
            seriesType: SeriesType.Baseline,
            seriesProps: {
              baseValue: { type: "price", price: 25 },
              topLineColor: "rgba( 38, 166, 154, 1)",
              topFillColor1: "rgba( 38, 166, 154, 0.28)",
              topFillColor2: "rgba( 38, 166, 154, 0.05)",
              bottomLineColor: "rgba( 239, 83, 80, 1)",
              bottomFillColor1: "rgba( 239, 83, 80, 0.05)",
              bottomFillColor2: "rgba( 239, 83, 80, 0.28)",
            },
          },
        ]}
      />
    </div>
  );
};

export default BaselineChart;
