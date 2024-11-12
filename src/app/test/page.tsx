"use client";
// pages/index.tsx
import dynamic from "next/dynamic";
import React from "react";

const TradingViewChart = dynamic(
  () => import("../../components/TradingViewChart"),
  { ssr: false }
);

const Home: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TradingViewChart symbol="BTCUSD" theme="dark" width="80%" height={600} />
    </div>
  );
};

export default Home;
