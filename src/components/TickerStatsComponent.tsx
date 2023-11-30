import { TickerData } from "../types";

interface Props {
  tickerData: TickerData;
}

export const TickerStats = ({ tickerData }: Props) => {
  const emptyDataString = "-";

  const { name, highTradePrice, lowTradePrice, vwap } = tickerData;

  return (
    <>
      <header id="tickerHeader">{name}</header>
      <div className="tickerRow">
        <div>Low Trade Price</div>
        <div>{lowTradePrice || emptyDataString}</div>
      </div>
      <div className="tickerRow">
        <div>High Trade Price</div>
        <div>{highTradePrice || emptyDataString}</div>
      </div>
      <div className="tickerRow">
        <div>VWAP</div>
        <div>{vwap || emptyDataString}</div>
      </div>
    </>
  );
};
