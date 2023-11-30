

export interface TradeData {
  ticker: string;
  side: OrderSide;
  requestedPrice: number;
  volume: number;
}

export interface SubmittedTradeData extends TradeData {
  order_id: string | null;
  fulfilledPrice: number | null;
  status: OrderStatus;
  date: Date;
}

export interface TickerData {
    name: string;
    highTradePrice: number;
    lowTradePrice: number;
    volumeTraded: number;
    vwap: number;
}

export enum OrderStatus {
  COMPLETE = "Complete",
  PENDING = "Pending",
  FAILED = "Failed",
}

export enum OrderSide {
  B = "B",
  O = "O",
}

export interface Dictionary<T> {
  [Key: string]: T;
}