import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import { getCoinInfo, getCoinPriceInfo } from "../api";
import Chart from "./Chart";
import Price from "./Price";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    position: absolute;
    left: 0;
    width: 100px;
    height: 30px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    background-color: #d3dedc;
  }
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0;
  border-radius: 10px;
  a {
    display: block;
    color: ${(props) =>
      props.isActive ? props.theme.accentColor : props.theme.textColor};
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface Params {
  coinId: string;
}

interface RouteState {
  name: string;
}

interface CoinInfo {
  description: string;
  development_status: string;
  first_data_at: string;
  hardware_wallet: boolean;
  hash_algorithm: string;
  id: string;
  is_active: boolean;
  is_new: boolean;
  last_data_at: string;
  message: string;
  name: string;
  open_source: boolean;
  org_structure: string;
  proof_type: string;
  rank: number;
  started_at: string;
  symbol: string;
  type: string;
}

interface CoinPrice extends CoinInfo {
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

const Coin: React.FC = () => {
  // const [loading, setLoading] = useState(true);
  const { coinId } = useParams<Params>();
  const history = useHistory();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData } = useQuery<CoinInfo>(
    ["info", coinId],
    () => getCoinInfo(coinId)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<CoinPrice>(
    ["price", coinId],
    () => getCoinPriceInfo(coinId),
    {
      refetchInterval: 5000,
    }
  );
  const loading = infoLoading || priceLoading;
  // const [coinInfoData, setCoinInfoData] = useState<CoinInfo>();
  // const [coinPriceData, setCoinPriceData] = useState<CoinPrice>();
  // const getCoinDetailInfo = useCallback(async () => {
  //   try {
  //     const infoResult = await axios.get(
  //       `https://api.coinpaprika.com/v1/coins/${coinId}`
  //     );
  //     const priceResult = await axios.get(
  //       `https://api.coinpaprika.com/v1/tickers/${coinId}`
  //     );
  //     setCoinInfoData(infoResult.data);
  //     setCoinPriceData(priceResult.data);
  //     setLoading(false)
  //   } catch (e) {}
  // },[coinId]);
  // useEffect(() => {
  //   getCoinDetailInfo();
  // }, [getCoinDetailInfo]);

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? "Loading.." : infoData?.name}
        </title>
      </Helmet>
      <Header>
        <button onClick={() => history.goBack()}>뒤로가기</button>

        <Title>
          {state?.name ? state.name : loading ? "Loading.." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank</span>
              <span> {infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>symbol</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>price</span>
              <span>{priceData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>total suply</span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>max supply</span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Switch>
            <Route path={`/${coinId}/price`}>
              <Price coinId={coinId} />
            </Route>
            <Route path={`/${coinId}/chart`}>
              <Chart coinId={coinId} />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
};

export default Coin;
