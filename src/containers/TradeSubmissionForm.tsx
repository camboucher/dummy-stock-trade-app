import { useState } from "react";

import { OrderSide, SubmittedTradeData, TradeData } from "../types";
import { TradeSubmitButton } from "../components/TradeSubmitButton";
import "../styles/TradeSubmissionForm.css";
import { OrderFormRadioButtons } from "../components/OrderFormRadioButtons";
import { FormControl, FormLabel, Input, InputLabel, TextField } from "@mui/material";

const defaultFormData: TradeData = {
  ticker: "",
  volume: 0,
  requestedPrice: 0,
  side: OrderSide.B,
};

interface Props {
  handleTradeSubmission: (trade: SubmittedTradeData) => void;
  lastSubmittedTrade?: SubmittedTradeData;
}

export const TradeSubmissionForm = ({
  handleTradeSubmission,
}: // lastSubmittedTrade,
Props) => {
  const [formData, updateFormData] = useState(defaultFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateFormData({ ...formData, [name]: value });
  };

  const clearFrom = () => {
    updateFormData(defaultFormData);
  };

  return (
    <FormControl id="trade-form-wrapper">
      <label className="form-header">Trade Form</label>
      <div id="form-content-wrapper">
        <TextField
        type="text"
        label="Ticker"
        value={formData.ticker}
        name="ticker"
        onChange={handleChange}
      ></TextField>
      <OrderFormRadioButtons handleChange={handleChange} />
      <TextField
        type="number"
        label="Price"
        value={formData.requestedPrice}
        name="requestedPrice"
        onChange={handleChange}
      ></TextField>
      <TextField
        type="number"
        label="Volume"
        value={formData.volume}
        name="volume"
        onChange={handleChange}
      ></TextField>
      <TradeSubmitButton
        tradeData={formData}
        clearForm={clearFrom}
        handleTradeSubmission={handleTradeSubmission}
      />
      </div>
    </FormControl>
  );
};
