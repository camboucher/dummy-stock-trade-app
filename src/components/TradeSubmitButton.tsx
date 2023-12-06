import { Button } from "@mui/material";
import { OrderStatus, TradeData } from "../types";
import { submitTrade } from "../utils";

interface Props {
  clearForm: () => void;
  handleTradeSubmission: (trade: TradeData) => void;
  handleSuccessfulTradeSubmission: (trade: TradeData) => void;
  handleFailedTradeSubmission: (trade: TradeData) => void;
  tradeData: TradeData;
}

export const TradeSubmitButton = ({
  tradeData,
  clearForm,
  handleTradeSubmission,
  handleFailedTradeSubmission,
  handleSuccessfulTradeSubmission,
}: Props) => {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    handleTradeSubmission({...tradeData, status: OrderStatus.PENDING, date: new Date()});
    clearForm();

    const result = await submitTrade(
      tradeData,
      handleSuccessfulTradeSubmission,
      handleFailedTradeSubmission
    );
    return result;
  };

  return (
    <Button id="submit-button" variant="contained" onClick={handleClick}>
      Submit
    </Button>
  );
};
