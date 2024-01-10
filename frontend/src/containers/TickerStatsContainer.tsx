import Grid from "@mui/material/Unstable_Grid2";
import { TickerStats } from "../components/TickerStatsComponent";
import { Dictionary, TickerData } from "../types";
import { Card, Paper } from "@mui/material";

interface Props {
  tickers: Dictionary<TickerData>;
}

export const TickerStatsContainer = ({ tickers }: Props) => {
  return (
      <Grid
        id="ticker-stats-container"
        container
        spacing={2}
        component={Paper}
      >
        <Grid xs={12}><h3>Daily Stock Data</h3></Grid>
        {Object.values(tickers).map((ticker, i) => (
          <Grid key={i} minWidth="fit-content" xs={12} md={6} lg={4}>
            <TickerStats tickerData={ticker} />
          </Grid>
        ))}
      </Grid>
  );
};
