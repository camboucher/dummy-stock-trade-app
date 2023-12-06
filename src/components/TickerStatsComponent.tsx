import { Card, CardContent } from "@mui/material";
import { TickerData, TickerDataRowNames } from "../types";
import "../styles/TickerStats.css";
interface Props {
  tickerData: TickerData;
}

interface RowProps {
  rowName: string,
  rowData: number | string;
}

export const emptyDataString = "-";

const TickerStatRow = ({rowName, rowData}: RowProps) => {
  return (
    <div className="ticker-row">
      <div className="row-title">{rowName}</div>
      &nbsp;
      <div className="row-data">{rowData ?? emptyDataString}</div>
    </div>
  );
};

export const TickerStats = ({ tickerData }: Props) => {
  
  const { name, highTradePrice, lowTradePrice, vwap } = tickerData;

  return (
    <Card>
      <CardContent>
      <h3 id="ticker-header">
        {name}
      </h3>
      <TickerStatRow rowName={TickerDataRowNames.LOW_TRADE_PRICE} rowData={lowTradePrice?.toFixed(2)}/>
      <TickerStatRow rowName={TickerDataRowNames.LOW_TRADE_PRICE} rowData={highTradePrice?.toFixed(2)}/>
      <TickerStatRow rowName={TickerDataRowNames.VWAP} rowData={vwap}/>
     </CardContent>
    </Card>
  );
};
