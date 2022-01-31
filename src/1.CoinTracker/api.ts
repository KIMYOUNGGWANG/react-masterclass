import axios, { AxiosPromise } from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1";
export const getCoinsInfo = async () => {
  const result = await axios.get(`${BASE_URL}/coins`);
  return result.data;
  // setCoins(result.data.slice(0, 100));
  // setLoading(false);
};

export const getCoinInfo = async (coinId: string) => {
  const infoResult = await axios.get(`${BASE_URL}/coins/${coinId}`);
  return infoResult.data;
};

export const getCoinPriceInfo = async (coinId: string) => {
  const priceResult = await axios.get(`${BASE_URL}/tickers/${coinId}`);
  return priceResult.data;
};

export const getCoinHistory = async (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 14;
  const result = await axios.get(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  );
  return result.data;
};
