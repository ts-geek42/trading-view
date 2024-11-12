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
  label: string; // New field for the legend label
}

interface TradingChartProps {
  seriesData: LineSeries[];
  width?: number;
  height?: number;
}

const TradingChartLabel: React.FC<TradingChartProps> = ({
  seriesData,
  width = 600,
  height = 400,
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRefs = useRef<ISeriesApi<"Line">[]>([]);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width,
        height,
        layout: { background: { color: "#FFFFFF" }, textColor: "#333" },
        grid: { vertLines: { color: "#eee" }, horzLines: { color: "#eee" } },
      });

      // Create a line series for each dataset
      seriesData.forEach((series) => {
        const lineSeries = chartRef.current!.addLineSeries({
          color:
            series.color ||
            `#${Math.floor(Math.random() * 16777215).toString(16)}`,
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
    <div>
      <div
        ref={chartContainerRef}
        className="rounded-lg shadow-md border border-gray-200 "
        style={{ width, height }}
      />
      <div className="flex mt-4 space-x-4">
        {seriesData.map((series, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span
              className="w-4 h-4"
              style={{ backgroundColor: series.color }}
            />
            <span>{series.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingChartLabel;
