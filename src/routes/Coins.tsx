import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import { getCoinsInfo } from "../api";
import { Helmet } from "react-helmet";
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

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const {isLoading, data }=useQuery<CoinInterface[]>("allCoins", getCoinsInfo);
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const getCoinInfo = async () => {
  //   const result = await axios.get("https://api.coinpaprika.com/v1/coins");
  //   setCoins(result.data.slice(0, 100));
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getCoinInfo();
  // }, []);
  return (
    <Container>
      <Helmet>Coins</Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0,100).map((coin: CoinInterface) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                  alt=""
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
