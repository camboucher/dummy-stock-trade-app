import {
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { OrderSide } from "../types";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OrderFormRadioButtons = ({ handleChange }: Props) => {
  return (
    <RadioGroup name="side" id="radio-button-group" onChange={handleChange} defaultValue={OrderSide.B}>
        <FormControlLabel value={OrderSide.B} control={<Radio />} label="Buy" />
        <FormControlLabel
          value={OrderSide.O}
          control={<Radio />}
          label="Offer"
          defaultChecked={true}
        />
    </RadioGroup>
  );
};
