import { SubmittedTrade } from "../components/SubmittedTrade";

import { SubmittedTradeData } from "../types";


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
  const title = <div className="container-header">Trade History</div>;

  const tableHeaderRow = (
    <div className="tableHeaderRow">
      {tradeHistoryColTitles.map((title) => <span className="columnTitle">{title}</span>)}
    </div>
  );

  const rows = trades.map((trade) => (
    <SubmittedTrade trade={trade}></SubmittedTrade>
  ));

  return (
    <>
      {title}
      {tableHeaderRow}
      {rows}
    </>
  );
};
