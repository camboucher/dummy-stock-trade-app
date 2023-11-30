import { useState } from "react";
import "./App.css";
import { TradeSubmissionForm } from "./containers/TradeSubmissionForm";
import { Dictionary, SubmittedTradeData, TickerData } from "./types";
import { TickerStatsContainer } from "./containers/TickerStatsContainer";
import { TradeHistoryTable } from "./containers/TradeHistoryTable";
import { tickerDataReducer } from "./utils";

function App() {
  const [submittedTradeData, updateSubmittedTradeData] = useState<
    SubmittedTradeData[]
  >([]);
  const [tickers, updateTickerData] = useState<Dictionary<TickerData>>(
    {}
  );

  const handleTradeSubmission = (newTrade: SubmittedTradeData) => {
    updateSubmittedTradeData([...submittedTradeData, newTrade]);

    const { ticker, volume, fulfilledPrice } = newTrade;
    const prevTickerData = tickers[ticker]
    let newTickerData: TickerData;

    if (!prevTickerData) {
      newTickerData = {
        name: ticker,
        volumeTraded: volume,
        highTradePrice: fulfilledPrice || 0,
        lowTradePrice: fulfilledPrice || 0,
        vwap: fulfilledPrice || 0,
      };
    } else {
      newTickerData = tickerDataReducer(newTrade, prevTickerData);
    }
    updateTickerData({...tickers, [ticker]: newTickerData });
  };

  return (
    <>
      <div id="pageTitle">ModernFi Stock Trading Exchange</div> 
      <TradeSubmissionForm handleTradeSubmission={handleTradeSubmission} />
      <TickerStatsContainer tickers={tickers} />
      <TradeHistoryTable trades={submittedTradeData} />
    </>
  );
}

export default App;
