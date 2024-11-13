import { IChartApi } from "lightweight-charts";
import { SeriesType } from "../interfaces";

export const getSeriesMethod = (type: SeriesType, chartRef: React.MutableRefObject<IChartApi | null>, seriesProps: any) => {
    switch (type) {
        case "Area":
            return chartRef.current!.addAreaSeries({ ...seriesProps })
        case "Bar":
            return chartRef.current!.addBarSeries({ ...seriesProps })
        case "Baseline":
            return chartRef.current!.addBaselineSeries({ ...seriesProps })
        case "Candlestick":
            return chartRef.current!.addCandlestickSeries({ ...seriesProps })
        case "Histogram":
            return chartRef.current!.addHistogramSeries({ ...seriesProps })
        case "Line":
            return chartRef.current!.addLineSeries({ ...seriesProps })
        case "Custom":
            return chartRef.current!.addCustomSeries({ ...seriesProps })
        default:
            return chartRef.current!.addCandlestickSeries({ ...seriesProps })
    }
}