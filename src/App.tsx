import { useState } from "react";
import "./styles/App.css";
import { TradeSubmissionForm } from "./containers/TradeSubmissionForm";
import { Dictionary, SubmittedTradeData, TickerData } from "./types";
import { TickerStatsContainer } from "./containers/TickerStatsContainer";
import { TradeHistoryTable } from "./containers/TradeHistoryTable";
import { tickerDataReducer } from "./utils";
import ModernFiLogo from "./assets/images/modernfilogo.svg";
import { mockTickers, mockTradeA, mockTradeB } from "./mockData";

function App() {
  const [submittedTradeData, updateSubmittedTradeData] = useState<
    SubmittedTradeData[]
  >([]);
  const [tickers, updateTickerData] = useState<Dictionary<TickerData>>({
  });

  const handleTradeSubmission = (newTrade: SubmittedTradeData) => {
    updateSubmittedTradeData([...submittedTradeData, newTrade]);

    const { ticker, volume, fulfilledPrice } = newTrade;
    const prevTickerData = tickers[ticker];
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
    updateTickerData({ ...tickers, [ticker]: newTickerData });
  };

  return (
    <>
      <header id="page-title">
        <img src={ModernFiLogo} />
      </header>
      <div id="top-row-content-container">
        <TradeSubmissionForm handleTradeSubmission={handleTradeSubmission} />
        <TickerStatsContainer tickers={tickers} />
      </div>
      <TradeHistoryTable trades={submittedTradeData} />
    </>
  );
}

export default App;
