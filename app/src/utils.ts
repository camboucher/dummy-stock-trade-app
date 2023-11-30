import {
  OrderStatus,
  SubmittedTradeData,
  TickerData,
  TradeData,
} from "./types";

export const getVWAP = (trades: SubmittedTradeData[], tickerName: string) => {
  let totalPurchasePrice = 0;
  let totalVolume = 0;

  trades.forEach((trade) => {
    const { fulfilledPrice, volume, ticker } = trade;
    if (
      ticker === tickerName &&
      trade.status === OrderStatus.COMPLETE &&
      !!fulfilledPrice
    ) {
      totalPurchasePrice += volume * (fulfilledPrice || 0);
      totalVolume += volume;
    }
  });

  return totalPurchasePrice && totalVolume
    ? totalPurchasePrice / totalVolume
    : null;
};

export const submitTrade = async (tradeInfo: TradeData) => {
  const { ticker, side } = tradeInfo;
  const volume = Number(tradeInfo.volume);
  const requestedPrice = Number(tradeInfo.requestedPrice)
  const body = JSON.stringify({ volume, ticker, side, price: requestedPrice });
  const url =
    "https://us-east-1.aws.data.mongodb-api.com/app/test-exchange-fvgfh/endpoint/orders";
  const method = "POST";

  return fetch(url, {
    method,
    body,
  })
    .catch((error) => console.log("error", error))
    .then((response) => response?.json())
    .catch((error) => console.log("error", error))
    .then((response) => {
      const { order_id, volume, price, side, ticker } = response;
      return {
          order_id,
          volume,
          requestedPrice: tradeInfo.requestedPrice,
          fulfilledPrice: price,
          side,
          date: new Date(),
          ticker,
          status: OrderStatus.COMPLETE,
        }; 
    }
    );
};

export const tickerDataReducer = (
  tradeData: SubmittedTradeData,
  prevTickerData: TickerData
): TickerData => {
  const { ticker, volume, fulfilledPrice, status } = tradeData;

  const { highTradePrice, lowTradePrice } = prevTickerData;

  if (status !== OrderStatus.COMPLETE || !fulfilledPrice) {
    return prevTickerData;
  }

  let totalPurchaseValue = prevTickerData.volumeTraded * prevTickerData.vwap;
  totalPurchaseValue += volume * fulfilledPrice;
  const totalVolumeTraded = prevTickerData.volumeTraded + volume;

  return {
    name: ticker,
    volumeTraded: totalVolumeTraded,
    highTradePrice: Math.max(highTradePrice, fulfilledPrice),
    lowTradePrice: Math.min(lowTradePrice, fulfilledPrice),
    vwap: totalVolumeTraded / totalPurchaseValue,
  };
};
