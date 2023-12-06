import { useState, useMemo } from "react";
import { SubmittedTrade } from "../components/SubmittedTradeRow";

import { TradeData } from "../types";
import "../styles/TradeHistoryTable.css";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TablePagination,
} from "@mui/material";
import { TableHeaderRow } from "../components/TableHeaderRow";

const ROWS_PER_PAGE = 4;

interface Props {
  trades: TradeData[];
}

export const TradeHistoryTable = ({ trades }: Props) => {
  const [currPage, setPage] = useState(0);

  const handlePageChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    pageNumber: number
  ) => {
    e?.preventDefault();
    setPage(pageNumber);
  };

  const currPageTrades = useMemo(
    () =>
      trades.slice(currPage * ROWS_PER_PAGE, (currPage + 1) * ROWS_PER_PAGE),
    [currPage, trades.length]
  );

  const title = <h3 id="trade-history-title">Trade History</h3>;

  const rows = currPageTrades.map((trade, i) => (
    <SubmittedTrade key={i} trade={trade}></SubmittedTrade>
  ));

  return (
    <TableContainer id="trade-history-table" component={Paper}>

      <Table stickyHeader>
        <TableHeaderRow />
        <TableBody>{rows}</TableBody>
        <TableFooter>
          <TablePagination
            onPageChange={handlePageChange}
            count={trades.length}
            page={currPage}
            rowsPerPage={ROWS_PER_PAGE}
            rowsPerPageOptions={[]}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
