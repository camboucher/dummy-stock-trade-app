
export interface TradeData {
  order_id?: string;
  ticker: string;
  side: OrderSide;
  volume: number;
  price: number;
  date?: Date;
  status?: OrderStatus;
}

export interface TickerData {
    name: string;
    highTradePrice: number;
    lowTradePrice: number;
    volumeTraded: number;
    vwap: number;
}

export enum SubmissionStatus {
  NONE = "NONE",
  PENDING = "PENDING",
  FAILED = "FAILED",
  SUCCESS = "SUCCESS",
}

export enum OrderStatus {
  SUCCESS = "Success",
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

export enum TickerDataRowNames {
  LOW_TRADE_PRICE="Low Trade Price: ",
  HIGH_TRADE_PRICE = "High Trade Price: ",
  VWAP = "VWAP: "
}