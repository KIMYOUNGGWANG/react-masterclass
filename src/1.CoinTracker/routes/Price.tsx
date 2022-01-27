import React from "react";
import { useQuery } from "react-query";
import { getCoinHistory, getCoinPriceInfo } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
import styled from "styled-components";
interface ChartProps {
  coinId: string;
}
interface CoinPrice {
  beta_value: number;
  circulating_supply: number;
  last_updated: string;
  max_supply: number;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      percent_from_price_ath: number;
    };
  };
  total_supply: number;
}

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 5px 15px;
  border-radius: 15px;
  font-size: 13px;
`;

const OverviewItem = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0px 10px 10px;
  padding-bottom: 0.1rem;
  border-bottom: 0.05rem solid whitesmoke;
`;

const Price = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<CoinPrice>(
    ["priceHistory", coinId],
    () => getCoinPriceInfo(coinId)
    // {
    //   refetchInterval: 3000,
    // }
  );
  console.log(data);
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <OverviewItemWrapper>
            <OverviewItem>
              <span>Price</span>
              <span>$ {data?.quotes.USD.price.toFixed(2)}</span>
            </OverviewItem>
            <OverviewItem>
              <span>1h-changed</span>
              <span>{data?.quotes.USD.percent_change_1h} %</span>
            </OverviewItem>
            <OverviewItem>
              <span>6h-changed</span>
              <span>{data?.quotes.USD.percent_change_6h} %</span>
            </OverviewItem>
            <OverviewItem>
              <span>12h-changed</span>
              <span>{data?.quotes.USD.percent_change_12h} %</span>
            </OverviewItem>
            <OverviewItem>
              <span>24h-changed</span>
              <span>{data?.quotes.USD.percent_change_24h} %</span>
            </OverviewItem>
            <OverviewItem>
              <span>7d-changed</span>
              <span>{data?.quotes.USD.percent_change_7d} %</span>
            </OverviewItem>
            <OverviewItem>
              <span>30d-changed</span>
              <span>{data?.quotes.USD.percent_change_30d} %</span>
            </OverviewItem>
            {/* <OverviewItem>1234</OverviewItem> */}
          </OverviewItemWrapper>
        </>
      )}
    </>
  );
};
export default Price;
