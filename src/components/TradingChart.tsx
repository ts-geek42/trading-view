import React, { useEffect, useRef } from "react";
import { createChart, LineData, IChartApi } from "lightweight-charts";

interface TradingChartProps {
  data: LineData[];
  width?: number;
  height?: number;
}

const TradingChart = ({ data, width = 600, height = 400 }: any) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width,
        height,
        layout: {
          background: {
            color: "white",
            topColor: "blue",
            bottomColor: "green",
          },
          textColor: "#333",
        },
        grid: { vertLines: { color: "#eee" }, horzLines: { color: "#eee" } },
      });

      const lineSeries = chartRef.current.addLineSeries();
      lineSeries.setData(data);
    }

    return () => {
      chartRef.current?.remove();
    };
  }, [data, width, height]);

  return (
    <div
      ref={chartContainerRef}
      className="rounded-lg shadow-md border border-gray-200 "
      style={{ width, height }}
    />
  );
};

export default TradingChart;
