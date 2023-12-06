import "./styles/App.css";
import { TradeSubmissionForm } from "./containers/TradeSubmissionForm";
import { TickerStatsContainer } from "./containers/TickerStatsContainer";
import { TradeHistoryTable } from "./containers/TradeHistoryTable";
import ModernFiLogo from "./assets/images/modernfilogo.svg";
import { useTradeHistoryData } from "./hooks/useTradeHistoryData";

function App() {
  const {
    submittedTrades,
    tickers,
    submissionStatus,
    handleTradeSubmission,
    handleFailedTradeSubmission,
    handleSuccessfulTradeSubmission,
  } = useTradeHistoryData();

  return (
    <>
      <header id="page-title">
        <img src={ModernFiLogo} />
      </header>
      <div id="top-row-content-container">
        <TradeSubmissionForm
          handleTradeSubmission={handleTradeSubmission}
          handleSuccessfulTradeSubmission={handleSuccessfulTradeSubmission}
          handleFailedTradeSubmission={handleFailedTradeSubmission}
          submissionStatus={submissionStatus}
        />
        <TickerStatsContainer tickers={tickers} />
      </div>
      <TradeHistoryTable trades={submittedTrades} />
    </>
  );
}

export default App;
