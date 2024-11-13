"use client";
import React, { useEffect, useRef } from "react";
import {
  createChart,
  IChartApi,
  LineData,
  BarData,
  ISeriesApi,
} from "lightweight-charts";

type ChartType = "line" | "bar";

interface TradingChartProps {
  data: LineData[] | BarData[];
  chartType: ChartType;
  width?: number;
  height?: number;
}

const TradingChart2: React.FC<TradingChartProps> = ({
  data,
  chartType,
  width = 600,
  height = 400,
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Line"> | ISeriesApi<"Bar"> | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      // Create the chart instance
      chartRef.current = createChart(chartContainerRef.current, {
        width,
        height,
        layout: { background: { color: "#FFFFFF" }, textColor: "#333" },
        grid: { vertLines: { color: "#eee" }, horzLines: { color: "#eee" } },
      });

      // Choose the series type based on the chartType prop
      if (chartType === "line") {
        seriesRef.current = chartRef.current.addLineSeries();
      } else if (chartType === "bar") {
        seriesRef.current = chartRef.current.addBarSeries();
      }

      // Set the data for the selected series
      seriesRef.current?.setData(data);
    }

    return () => {
      chartRef.current?.remove();
    };
  }, [data, chartType, width, height]);

  return (
    <div
      ref={chartContainerRef}
      className="rounded-lg shadow-md border border-gray-200 "
      style={{ width, height }}
    />
  );
};

export default TradingChart2;
