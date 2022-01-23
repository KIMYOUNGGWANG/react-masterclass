import axios, { AxiosPromise } from "axios";

export const getCoinsInfo = async () => {
    const result = await axios.get("https://api.coinpaprika.com/v1/coins");
    return result.data;
    // setCoins(result.data.slice(0, 100));
    // setLoading(false);
  };

  export const getCoinInfo = async (coinId:string) => {
    const infoResult = await axios.get(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      return infoResult.data
  }

  export const getCoinPriceInfo = async (coinId:string) =>{
    const priceResult = await axios.get(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      );
      return priceResult.data
  }

  export const getCoinHistory = async(coinId:string) => {
      const endDate = Math.floor(Date.now() / 1000);
      const startDate = endDate - 60*60*24*13;
    const result = await axios.get(`https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`);
    return result.data
  }