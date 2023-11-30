import { TickerStats } from "../components/TickerStatsComponent";
import { Dictionary, TickerData } from "../types";

interface Props {
    tickers: Dictionary<TickerData>;
}

export const TickerStatsContainer = ({tickers}: Props) => {
    return Object.values(tickers).map((ticker) => {
        return <TickerStats tickerData={ticker} />
    })
}