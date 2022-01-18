import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
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
  links: object[];
  links_extended: object[];
  message: string;
  name: string;
  open_source: boolean;
  org_structure: string;
  proof_type: string;
  rank: number;
  started_at: string;
  symbol: string;
  tags: object[];
  team: object[];
  type: string;
}

interface CoinPrice extends CoinInfo {
  beta_value: number;
  circulating_supply: number;
  last_updated: string;
  max_supply: number;
  quotes: object;
  total_supply: number;
}

const Coin: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<Params>();
  const { state } = useLocation<RouteState>();
  const [coinInfoData, setCoinInfoData] = useState<CoinInfo>();
  const [coinPriceData, setCoinPriceData] = useState<CoinPrice>();
  const getCoinDetailInfo = async () => {
    try {
      const infoResult = await axios.get(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      const priceResult = await axios.get(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      );
      setCoinInfoData(infoResult.data);
      setCoinPriceData(priceResult.data);
    } catch (e) {}
  };
  useEffect(() => {
    getCoinDetailInfo();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading.."}</Title>
      </Header>
      {loading ? <Loader>loading...</Loader> : null}
    </Container>
  );
};

export default Coin;
