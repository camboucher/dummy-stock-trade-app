import { Container } from "@mui/material";
import { TickerStats } from "../components/TickerStatsComponent";
import { Dictionary, TickerData } from "../types";

interface Props {
    tickers: Dictionary<TickerData>;
}

export const TickerStatsContainer = ({tickers}: Props) => {
    return (
        <Container>
            {Object.values(tickers).map((ticker) => <TickerStats tickerData={ticker} />)}
        </Container>
        );
}