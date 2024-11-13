"use client";
import React, { useEffect, useRef } from "react";
import {
  createChart,
  IChartApi,
  LineData,
  ISeriesApi,
} from "lightweight-charts";

interface LineSeries {
  data: LineData[];
  color?: string;
}

interface TradingChartProps {
  seriesData: LineSeries[];
  width?: number;
  height?: number;
}

const TradingChart3: React.FC<TradingChartProps> = ({
  seriesData,
  width = 600,
  height = 400,
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRefs = useRef<ISeriesApi<"Line">[]>([]);

  useEffect(() => {
    if (chartContainerRef.current) {
      // Create the chart instance
      chartRef.current = createChart(chartContainerRef.current, {
        width,
        height,
        layout: { background: { color: "#FFFFFF" }, textColor: "#333" },
        grid: { vertLines: { color: "#eee" }, horzLines: { color: "#eee" } },
      });

      // Create a line series for each dataset
      seriesData.forEach((series, index) => {
        const lineSeries = chartRef.current!.addLineSeries({
          color:
            series.color ||
            `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Default color if none specified
        });
        lineSeries.setData(series.data);
        seriesRefs.current.push(lineSeries);
      });
    }

    // Cleanup on component unmount
    return () => {
      seriesRefs.current.forEach((series) =>
        chartRef.current?.removeSeries(series)
      );
      chartRef.current?.remove();
    };
  }, [seriesData, width, height]);

  return (
    <div
      ref={chartContainerRef}
      className="rounded-lg shadow-md border border-gray-200 "
      style={{ width, height }}
    />
  );
};

export default TradingChart3;
