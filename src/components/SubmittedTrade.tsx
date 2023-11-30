import { SubmittedTradeData } from "../types";

interface Props {
  trade: SubmittedTradeData;
}

export const SubmittedTrade = ({ trade }: Props) => {
  
    const renderOrderData = () => {
        const properties = Object.keys(trade);
        const values = Object.values(trade);
        
        return properties.map((property, i) => (
            <div className={property}>{JSON.stringify(values[i])}</div>
         ));
    };

  return <div className="sumbittedTrade">{renderOrderData()}</div>;
};
