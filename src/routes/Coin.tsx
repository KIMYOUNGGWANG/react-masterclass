import React from 'react';
import { useParams } from 'react-router-dom';

interface Params {
  coinId : string;
}
const Coin = () => {
  const {coinId} = useParams<Params>();
  console.log(coinId)

  return (
    <h1>
      Coin : {coinId} 
    </h1>
  );
};

export default Coin;