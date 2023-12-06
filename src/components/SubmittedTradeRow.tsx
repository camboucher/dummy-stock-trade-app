import { TableCell, TableRow } from "@mui/material";
import { SubmittedTradeData } from "../types";

interface Props {
  trade: SubmittedTradeData;
}

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "2-digit",
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
};
const locale = "en-us";

export const SubmittedTrade = ({ trade }: Props) => {
  const { order_id, side, ticker, status, volume, date, fulfilledPrice } =
    trade;

  const formattedDate = date.toLocaleString(locale, dateFormatOptions);
  const roundedVolume = volume.toFixed(2);
  const roundedPrice = fulfilledPrice?.toFixed(2) ?? "-";

  return (
    <>
      <TableRow
        key={order_id}
        className="submitted-trade-row"
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {ticker}
        </TableCell>
        <TableCell align="left">{side}</TableCell>
        <TableCell align="left">{roundedPrice}</TableCell>
        <TableCell align="left">{roundedVolume}</TableCell>
        <TableCell align="left">{status}</TableCell>
        <TableCell align="left">{formattedDate}</TableCell>
        <TableCell align="left" className="order-id">
          {order_id}
        </TableCell>
      </TableRow>
    </>
  );
};
