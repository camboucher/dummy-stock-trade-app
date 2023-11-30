import { useState } from "react";
// import { Radio, Group } from "@mantine/core";

import { OrderSide, SubmittedTradeData, TradeData } from "../types";
import { TradeSubmitButton } from "../components/TradeSubmitButton";

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
  // lastSubmittedTrade,
}: Props) => {
  const [formData, updateFormData] = useState(defaultFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateFormData({ ...formData, [name]: value});
  };

  const clearFrom = () => {
    updateFormData(defaultFormData);
  };

  return (
    <form id="tradeFormHeader">
      Trade Form
      <label>
        Ticker:{" "}
        <input
          type="text"
          value={formData.ticker}
          name="ticker"
          onChange={handleChange}
        ></input>
      </label>
      {/* <Radio.Group
        name="side"
        description="Trade Type"
      >
        <Group mt="xs" onChange={handleChange}>
          <Radio size="sm" value={OrderSide.B} label={OrderSide.B} />
          <Radio value={OrderSide.O} label={OrderSide.O} />
        </Group>
      </Radio.Group> */}
      <div onChange={handleChange}>
        <label htmlFor={OrderSide.B}>Purchase</label>
        <input type="radio" name="side" value={OrderSide.B} id="purchase" />
        <label htmlFor={OrderSide.O}>Sell</label>
        <input type="radio" name="side" value={OrderSide.O} id="offer" />
      </div>
      <label>
        Price:{" "}
        <input
          type="number"
          value={formData.requestedPrice}
          name="requestedPrice"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Volume:{" "}
        <input
          type="number"
          value={formData.volume}
          name="volume"
          onChange={handleChange}
        ></input>
      </label>
      <TradeSubmitButton tradeData={formData} clearForm={clearFrom} handleTradeSubmission={handleTradeSubmission}/>
    </form>
  );
};
