import { useState } from "react";

import { OrderSide, SubmissionStatus, TradeData } from "../types";
import { TradeSubmitButton } from "../components/TradeSubmitButton";
import { TradeStatusText } from "../components/TradeStatusText";
import "../styles/TradeSubmissionForm.css";
import { OrderFormRadioButtons } from "../components/OrderFormRadioButtons";
import { FormControl, Paper, TextField } from "@mui/material";

const defaultFormData: TradeData = {
  ticker: "",
  volume: 0,
  price: 0,
  side: OrderSide.B,
};

interface Props {
  submissionStatus: SubmissionStatus;
  handleTradeSubmission: (trade: TradeData) => void;
  handleSuccessfulTradeSubmission: (trade: TradeData) => void;
  handleFailedTradeSubmission: (trade: TradeData) => void;
}

export const TradeSubmissionForm = ({
  submissionStatus,
  handleTradeSubmission,
  handleSuccessfulTradeSubmission,
  handleFailedTradeSubmission,
}: Props) => {
  const [formData, updateFormData] = useState(defaultFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!isNaN(parseFloat(value))) {
      updateFormData({ ...formData, [name]: parseFloat(value) });
    } else {
      updateFormData({ ...formData, [name]: value });
    }
  };

  const clearFrom = () => {
    updateFormData(defaultFormData);
  };

  return (
    <>
      <FormControl id="trade-form-container" component={Paper}>
        <h3>Trade Submission Form</h3>
        <TextField
          type="text"
          label="Ticker"
          value={formData.ticker}
          inputProps={{ maxLength: 4 }}
          name="ticker"
          onChange={handleChange}
          required
        ></TextField>
        <TextField
          type="number"
          label="Price"
          value={formData.price}
          inputProps={{ min: 0 }}
          name="price"
          onChange={handleChange}
          required
        ></TextField>
        <TextField
          type="number"
          label="Volume"
          value={formData.volume}
          inputProps={{ min: 0 }}
          name="volume"
          onChange={handleChange}
          required
        ></TextField>
        <OrderFormRadioButtons handleChange={handleChange} />
        <TradeSubmitButton
          tradeData={formData}
          clearForm={clearFrom}
          handleTradeSubmission={handleTradeSubmission}
          handleSuccessfulTradeSubmission={handleSuccessfulTradeSubmission}
          handleFailedTradeSubmission={handleFailedTradeSubmission}
        />
        <TradeStatusText submissionStatus={submissionStatus} />
      </FormControl>
    </>
  );
};
