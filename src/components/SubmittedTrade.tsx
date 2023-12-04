import { SubmittedTradeData } from "../types";

interface Props {
  trade: SubmittedTradeData;
}

export const SubmittedTrade = ({ trade }: Props) => {
  const renderOrderData = () => {
    const properties = Object.keys(trade);
    const values = Object.values(trade);

    return properties.map((property, i) => (
      <div key={trade.order_id} className={property}>
        {values[i]}
      </div>
    ));
  };

  return <div className="submittedTrade">{renderOrderData()}</div>;
};
