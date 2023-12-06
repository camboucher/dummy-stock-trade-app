import { useState } from "react";

import { OrderSide, SubmittedTradeData, TradeData } from "../types";
import { TradeSubmitButton } from "../components/TradeSubmitButton";
import "../styles/TradeSubmissionForm.css";
import { OrderFormRadioButtons } from "../components/OrderFormRadioButtons";
import { FormControl, FormLabel, Input, InputLabel, Paper, TextField } from "@mui/material";

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
    <FormControl id="trade-form-container" component={Paper}>
      <h3>Trade Submission Form</h3>
        <TextField
        type="text"
        label="Ticker"
        value={formData.ticker}
        inputProps={{maxLength: 4}}
        name="ticker"
        onChange={handleChange}
        required
      ></TextField>
      <TextField
        type="number"
        label="Price"
        value={formData.requestedPrice}
        inputProps={{min: 0}}
        name="requestedPrice"
        onChange={handleChange}
        required
      ></TextField>
      <TextField
        type="number"
        label="Volume"
        value={formData.volume}
        inputProps={{min: 0}}
        name="volume"
        onChange={handleChange}
        required
      ></TextField>
       <OrderFormRadioButtons handleChange={handleChange} />
      <TradeSubmitButton
        tradeData={formData}
        clearForm={clearFrom}
        handleTradeSubmission={handleTradeSubmission}
      />
    </FormControl>
  );
};
