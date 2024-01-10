import { Card, CardContent } from "@mui/material";
import { TickerData, TickerDataRowNames } from "../types";
import "../styles/TickerStats.css";
interface Props {
  tickerData: TickerData;
}

interface RowProps {
  rowName: string;
  rowData: number;
}

export const emptyDataString = "-";

const TickerStatRow = ({ rowName, rowData }: RowProps) => {
  const displayData = rowData ? rowData.toFixed(2) : "-";
  return (
    <div className="ticker-row">
      <div className="row-title">{rowName}</div>
      &nbsp;
      <div className="row-data">{displayData}</div>
    </div>
  );
};

export const TickerStats = ({ tickerData }: Props) => {
  const { name, highTradePrice, lowTradePrice, vwap } = tickerData;

  return (
    <Card>
      <CardContent >
        <h3 id="ticker-header">{name}</h3>
        <TickerStatRow
          rowName={TickerDataRowNames.LOW_TRADE_PRICE}
          rowData={lowTradePrice}
        />
        <TickerStatRow
          rowName={TickerDataRowNames.LOW_TRADE_PRICE}
          rowData={highTradePrice}
        />
        <TickerStatRow rowName={TickerDataRowNames.VWAP} rowData={vwap} />
      </CardContent>
    </Card>
  );
};
