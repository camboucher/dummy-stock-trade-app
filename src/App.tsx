import { useState } from "react";
import "./styles/App.css";
import { TradeSubmissionForm } from "./containers/TradeSubmissionForm";
import { Dictionary, OrderSide, OrderStatus, SubmittedTradeData, TickerData } from "./types";
import { TickerStatsContainer } from "./containers/TickerStatsContainer";
import { TradeHistoryTable } from "./containers/TradeHistoryTable";
import { tickerDataReducer } from "./utils";
import ModernFiLogo from "./assets/images/modernfilogo.svg";

const mockTrade = {
  order_id: "b64957f2-c60d-47af-83fe-e4b9e9fa288d",
  volume: 25,
  requestedPrice: 100,
  fulfilledPrice: 101.98919618202218,
  side: OrderSide.B,
  date: "Thu Nov 30 2023 20:03:15 GMT-0500 (Eastern Standard Time)",
  ticker: "AAPL",
  status: OrderStatus.COMPLETE,
};

const mockTickers: Dictionary<TickerData> = {
  "AAPL": {
    name: "AAPL",
    volumeTraded: 420,
    highTradePrice: 110,
    lowTradePrice: 95,
    vwap: 102.5,
  }
}

function App() {
  const [submittedTradeData, updateSubmittedTradeData] = useState<
    SubmittedTradeData[]
  >([mockTrade]);
  const [tickers, updateTickerData] = useState<Dictionary<TickerData>>(
    mockTickers
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
      <header id="pageTitle">
        <img src={ModernFiLogo}/>
       </header> 
      <TradeSubmissionForm handleTradeSubmission={handleTradeSubmission} />
      <TickerStatsContainer tickers={tickers} />
      {/* <TradeHistoryTable trades={submittedTradeData} /> */}
    </>
  );
}

export default App;
