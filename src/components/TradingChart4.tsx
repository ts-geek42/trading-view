"use client";
import React, { useEffect, useRef } from "react";
import {
  createChart,
  IChartApi,
  ISeriesApi,
  LineData,
  HistogramData,
} from "lightweight-charts";

interface LineSeries {
  data: LineData[];
  color?: string;
  width?: number;
}

interface VolumeSeries {
  data: HistogramData[];
}

interface TradingChartProps {
  lineSeries: LineSeries[];
  volumeSeries: VolumeSeries;
  width?: number;
  height?: number;
}

const TradingChart4: React.FC<TradingChartProps> = ({
  lineSeries,
  volumeSeries,
  width = 800,
  height = 400,
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const lineSeriesRefs = useRef<ISeriesApi<"Line">[]>([]);
  const volumeSeriesRef = useRef<ISeriesApi<"Histogram"> | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width,
        height,
        layout: { background: { color: "#FFFFFF" }, textColor: "#333" },
        grid: { vertLines: { color: "#eee" }, horzLines: { color: "#eee" } },
        crosshair: { mode: 1 },
      });

      // Add line series (price data and EMA lines)
      lineSeries.forEach((series) => {
        const line = chartRef.current!.addLineSeries({
          color: series.color || "#000",
          //   lineWidth: series.width || 2,
        });
        line.setData(series.data);
        lineSeriesRefs.current.push(line);
      });

      // Add volume series
      volumeSeriesRef.current = chartRef.current.addHistogramSeries({
        color: "#26a69a",
        priceFormat: { type: "volume" },
        priceLineVisible: false,
        // scaleMargins: { top: 0.8, bottom: 0 },
      });
      volumeSeriesRef.current.setData(volumeSeries.data);
    }

    // Cleanup on component unmount
    return () => {
      lineSeriesRefs.current.forEach((series) =>
        chartRef.current?.removeSeries(series)
      );
      if (volumeSeriesRef.current && chartRef.current)
        chartRef.current.removeSeries(volumeSeriesRef.current);
      chartRef.current?.remove();
    };
  }, [lineSeries, volumeSeries, width, height]);

  return (
    <div
      ref={chartContainerRef}
      className="rounded-lg shadow-md border border-gray-200 p-4"
      style={{ width, height }}
    />
  );
};

export default TradingChart4;
