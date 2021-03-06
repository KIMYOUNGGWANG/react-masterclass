import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { isRecoilValue, useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
  coinId: string;
}

interface HistoryData {
  close: number;
  high: number;
  low: number;
  market_cap: number;
  open: number;
  time_close: string;
  time_open: string;
  volume: number;
}
const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<HistoryData[]>(
    ["chart", coinId],
    () => getCoinHistory(coinId)
    // {
    //   refetchInterval: 5000,
    // }
  );
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <div>
      {isLoading ? (
        "Loadin chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: coinId,
              // data: data?.map((el: HistoryData) => [
              //   new Date(el.time_open).valueOf(),
              //   [el.open, el.high, el.low, el.close],
              // ]),
              data: data?.map((el: HistoryData) => {
                return {
                  x: new Date(new Date(el.time_open).getTime()),
                  y: [
                    el.open.toFixed(3),
                    el.high.toFixed(3),
                    el.low.toFixed(3),
                    el.close.toFixed(3),
                  ],
                };
              }),
            },
          ]}
          options={{
            chart: {
              width: 500,
              height: 500,
              toolbar: {
                show: false,
              },
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "datetime",
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#AEFEFF",
                  downward: "#EF2F88",
                },
                wick: {
                  useFillColor: true,
                },
              },
            },
          }}
        />
        // <ApexChart
        //   type="line"
        //   series={[
        //     { name: coinId, data: data?.map((el: HistoryData) => el.close) },
        //   ]}
        //   options={{
        //     theme: {
        //       mode: isDark ? "dark" : "light",
        //     },
        //     chart: {
        //       height: 500,
        //       width: 500,
        //       toolbar: {
        //         show: false,
        //       },
        //       background: "transprants",
        //     },
        //     grid: {
        //       show: false,
        //     },
        //     stroke: {
        //       curve: "smooth",
        //       width: 3,
        //     },
        //     yaxis: {
        //       show: false,
        //     },
        //     xaxis: {
        //       labels: {
        //         show: false,
        //       },
        //       axisTicks: {
        //         show: false,
        //       },
        //       axisBorder: {
        //         show: false,
        //       },
        //       type: "datetime",
        //       categories: data?.map((el: HistoryData) => el.time_close),
        //     },
        //     fill: {
        //       type: "gradient",
        //       gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
        //     },
        //     colors: ["#0fbcf9"],
        //     tooltip: {
        //       y: {
        //         formatter: (value) => `${value.toFixed(3)}`,
        //       },
        //     },
        //   }}
        // />
      )}
    </div>
  );
};

export default Chart;
