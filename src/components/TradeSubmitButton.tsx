import { Button } from "@mantine/core";

import { SubmittedTradeData, TradeData } from "../types";
import { submitTrade } from "../utils";

interface Props {
  clearForm: () => void;
  handleTradeSubmission: (trade: SubmittedTradeData) => void;
  tradeData: TradeData;
}

export const TradeSubmitButton = ({ tradeData, clearForm, handleTradeSubmission }: Props) => {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const result = await submitTrade(tradeData);
    handleTradeSubmission(result);
    clearForm();
    };

  return <Button onClick={handleClick}>Submit</Button>;
};

// {
    //     "order_id": "string",
    //     "ticker": "string",
    //     "side": "string", 
    //     "volume": "float",
    //     "price": "float"
    //   }