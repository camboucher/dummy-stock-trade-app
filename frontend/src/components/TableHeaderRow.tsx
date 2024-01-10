import { TableHead, TableRow, TableCell } from "@mui/material";
import "../styles/TradeHistoryTable.css"

export const TableHeaderRow = () => {
    return (
      <TableHead >
        <TableRow id="table-header-row">
          <TableCell>Ticker</TableCell>
          <TableCell align="left"> Side</TableCell>
          <TableCell align="left"> Trade Price</TableCell>
          <TableCell align="left">Volume</TableCell>
          <TableCell align="left">Status</TableCell>
          <TableCell align="left">Date</TableCell>
          <TableCell align="left">Order ID</TableCell>
        </TableRow>
      </TableHead>
    );
  };