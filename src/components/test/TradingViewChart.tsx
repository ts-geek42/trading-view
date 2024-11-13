"use client";
// components/TradingViewChart.tsx
import React, { useEffect, useRef } from "react";

interface TradingViewChartProps {
  symbol?: string;
  theme?: "light" | "dark";
  width?: string | number;
  height?: string | number;
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({
  symbol = "TSLA",
  theme = "light",
  width = "100%",
  height = "100%",
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current || !window.TradingView) return;

    new window.TradingView.widget({
      symbol,
      theme,
      container_id: chartContainerRef.current.id,
      width,
      height,
      interval: "D",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      hide_side_toolbar: false,
      allow_symbol_change: true,
      studies: ["MACD@tv-basicstudies"],
      withdateranges: true,
      hide_legend: false,
      save_image: false,
    });
  }, [symbol, theme, width, height]);

  return (
    <div
      id="tradingview_chart"
      ref={chartContainerRef}
      style={{ width, height }}
    ></div>
  );
};

export default TradingViewChart;
