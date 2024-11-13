"use client";
import React, { useEffect, useRef } from "react";
import { createChart, IChartApi, ISeriesApi } from "lightweight-charts";
import { SeriesType } from "./interfaces";
import { getSeriesMethod } from "./helpers";

interface SeriesData {
  data: any[];
  color?: string;
  seriesType?: SeriesType;
}

interface ChartProps {
  seriesData: SeriesData[];
  width?: number;
  height?: number;
  chartContainerProps?: any;
}

const Chart: React.FC<ChartProps> = ({
  seriesData,
  width = 1000,
  height = 500,
  chartContainerProps,
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRefs = useRef<ISeriesApi<any>[]>([]);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width,
        height,
        layout: { background: { color: "#FFFFFF" }, textColor: "#333" },
        grid: { vertLines: { color: "#eee" }, horzLines: { color: "#eee" } },
      });
    }

    seriesData.forEach((item, index) => {
      const series = getSeriesMethod(
        item.seriesType || SeriesType.Candlestick,
        chartRef,
        {
          color:
            item.color ||
            `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        }
      );
      series.setData(item.data);
      seriesRefs.current.push(series);
    });
    chartRef.current?.timeScale().fitContent();
    return () => {
      seriesRefs.current.forEach((item) =>
        chartRef.current?.removeSeries(item)
      );
      chartRef.current?.remove();
    };
  }, [seriesData, height, width]);
  return (
    <div
      ref={chartContainerRef}
      style={{
        boxShadow: "10px 10px 78px 0px rgba(232,227,232,1)",
        padding: "16px",
        borderRadius: "16px",
        marginTop: "40px",
      }}
      {...chartContainerProps}
    />
  );
};

export default Chart;
