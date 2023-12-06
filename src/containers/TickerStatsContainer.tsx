import Grid from "@mui/material/Unstable_Grid2";
import { TickerStats } from "../components/TickerStatsComponent";
import { Dictionary, TickerData } from "../types";

interface Props {
  tickers: Dictionary<TickerData>;
}

export const TickerStatsContainer = ({ tickers }: Props) => {
  return (
    <>
      <Grid
        id="ticker-stats-container"
        container
        columns={6}
        spacing={2}
        alignContent={"flex-start"}
      >
        {Object.values(tickers).map((ticker, i) => (
          <Grid xs={6} sm={3} md={2}>
            <TickerStats key={i + '-' + ticker.name} tickerData={ticker} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
