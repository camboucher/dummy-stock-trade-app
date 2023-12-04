import {
  Radio,
  RadioGroup,
  FormControlLabel,
  InputLabel,
  FormLabel,
} from "@mui/material";
import { OrderSide } from "../types";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OrderFormRadioButtons = ({ handleChange }: Props) => {
  return (
    <RadioGroup name="side" className="radio-buttons-group" onChange={handleChange}>
      <FormLabel> Order Side </FormLabel>
      <div id="rado-button-row-wrapper">
        <FormControlLabel value={OrderSide.B} control={<Radio />} label="Buy" />
        <FormControlLabel
          value={OrderSide.O}
          control={<Radio />}
          label="Offer"
        />
      </div>
    </RadioGroup>
  );
};
