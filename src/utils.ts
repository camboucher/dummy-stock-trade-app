import { OrderStatus, TickerData, TradeData } from "./types";

export const submitTrade = async (
  tradeData: TradeData,
  successCb: (successfulTrade: TradeData) => void,
  failureCb: (failedTrade: TradeData) => void
) => {
  const url =
    "https://us-east-1.aws.data.mongodb-api.com/app/test-exchange-fvgfh/endpoint/orders";
  const method = "POST";

  return fetch(url, {
    method,
    body: JSON.stringify(tradeData),
  })
    .catch((error) => {
      console.log("error", error);
    })
    .then((response) => response?.json())
    .then((response) => {
      const { order_id, volume, price, side, ticker, error } = response;
      if (error) {
        failureCb(tradeData);
      } else {
        successCb({
          order_id,
          volume,
          price,
          side,
          ticker,
          date: new Date(),
          status: OrderStatus.SUCCESS,
        });
      }
    });
};

export const tickerDataReducer = (
  successfulTrade: TradeData,
  prevTickerData: TickerData
): TickerData => {
  const { ticker, volume, price } = successfulTrade;

  const { highTradePrice, lowTradePrice } = prevTickerData;

  let totalPurchaseValue = prevTickerData.volumeTraded * prevTickerData.vwap;
  totalPurchaseValue += volume * price;
  const totalVolumeTraded = prevTickerData.volumeTraded + volume;

  return {
    name: ticker,
    volumeTraded: totalVolumeTraded,
    highTradePrice: Math.max(highTradePrice, price),
    lowTradePrice: Math.min(lowTradePrice, price),
    vwap: totalVolumeTraded / totalPurchaseValue,
  };
};