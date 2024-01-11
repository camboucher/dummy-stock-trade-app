import { OrderStatus, TickerData, TradeData } from "./types";

export const fetchTradeData = async (
) => {
  const route =
  "http://localhost:5000/trade-data";
  const method = "GET";

  return fetch(route, { method })
    .then((response) => response?.json())
    .then((data) => {
      console.log(data, "SUCCESS")
      return data
    })
    .catch((error) => {
      console.log("error", error);
    });
}

export const fetchTickerData = async () => {
  const route = "http://localhost:5000/stock-data";
  const method = "GET";

  return fetch(route, { method })
    .then((response) => response?.json())
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((error) => {
      console.log("error", error);
    });
}

export const submitTrade = async (
  tradeData: TradeData,
  successCb: (successfulTrade: TradeData) => void,
  failureCb: (failedTrade: TradeData) => void
) => {
  const route =
    "http://localhost:5000/trade-data";
  const method = "POST";

  return fetch(route, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tradeData),
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
    })
    .catch((error) => {
      console.log("error", error);
    })};

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
