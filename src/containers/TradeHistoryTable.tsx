import { SubmittedTrade } from "../components/SubmittedTrade";

import { SubmittedTradeData } from "../types";
import "../styles/TradeHistoryTable.css"

const tradeHistoryColTitles = [
  "Ticker",
  "Fulfilled Price",
  "Requested Price",
  "Volume",
  "Status",
  "Date",
  "Order Id",
];

interface Props {
  trades: SubmittedTradeData[];
}

export const TradeHistoryTable = ({ trades }: Props) => {
  const title = <h1 className="container-header">Trade History</h1>;

  const tableHeaderRow = (
    <h2 className="tableHeaderRow">
      {tradeHistoryColTitles.map((title) => <div className="columnTitle">{title}</div>)}
    </h2>
  );

  const rows = trades.map((trade) => (
    <SubmittedTrade trade={trade}></SubmittedTrade>
  ));

  return (
    <div id="tableWrapper">
      {title}
      {tableHeaderRow}
      {rows}
    </div>
  );
};
