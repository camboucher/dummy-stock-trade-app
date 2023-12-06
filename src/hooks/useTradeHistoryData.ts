import { useState } from "react";
import {
  Dictionary,
  OrderStatus,
  SubmissionStatus,
  TickerData,
  TradeData,
} from "../types";
import { tickerDataReducer } from "../utils";

export const useTradeHistoryData = () => {
  const [submittedTrades, setSubmittedTrades] = useState<TradeData[]>([]);
  const [tickers, setTickers] = useState<Dictionary<TickerData>>({});
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>(
    SubmissionStatus.NONE
  );

  const handleTradeSubmission = () => {
    setSubmissionStatus(SubmissionStatus.PENDING);
  };

  const handleFailedTradeSubmission = (failedTrade: TradeData) => {
    setSubmissionStatus(SubmissionStatus.FAILED);
    setTimeout(() => {
      setSubmissionStatus(SubmissionStatus.NONE);
    }, 3000);
    setSubmittedTrades([
      ...submittedTrades,
      { ...failedTrade, status: OrderStatus.FAILED, date: new Date() },
    ]);
  };

  const handleSuccessfulTradeSubmission = (successfulTrade: TradeData) => {
    setSubmissionStatus(SubmissionStatus.SUCCESS);
    setTimeout(() => {
      setSubmissionStatus(SubmissionStatus.NONE);
    }, 3000);
    setSubmittedTrades([...submittedTrades, successfulTrade]);
    updateTickerData(successfulTrade);
  };

  const updateTickerData = (successfulTrade: TradeData) => {
    const { ticker, volume, price } = successfulTrade;
    const prevTickerData = tickers[ticker];
    let newTickerData: TickerData;

    if (!prevTickerData) {
      newTickerData = {
        name: ticker,
        volumeTraded: volume,
        highTradePrice: price,
        lowTradePrice: price,
        vwap: price,
      };
    } else {
      newTickerData = tickerDataReducer(successfulTrade, prevTickerData);
    }
    setTickers({ ...tickers, [ticker]: newTickerData });
  };

  return {
    submittedTrades,
    tickers,
    submissionStatus,
    handleTradeSubmission,
    handleFailedTradeSubmission,
    handleSuccessfulTradeSubmission,
  };
};
