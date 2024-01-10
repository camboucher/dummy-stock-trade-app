import { Dictionary, OrderSide, OrderStatus, TickerData, TradeData } from "./types";

const MOCK_TICKER_DATA_ENTRIES = 12;

function generateMockTickerData(numEntries: number): Dictionary<TickerData> {
  const mockStockData: Dictionary<TickerData> = {};

  for (let i = 0; i < numEntries; i++) {
    const symbol = generateRandomSymbol();
    mockStockData[symbol] = {
      name: `Company ${symbol}`,
      volumeTraded: generateRandomNumber(100, 1000),
      highTradePrice: generateRandomNumber(80, 120),
      lowTradePrice: generateRandomNumber(60, 90),
      vwap: generateRandomNumber(70, 110),
    };
  }

  return mockStockData;
}

function generateRandomSymbol(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
  const randomNumber = generateRandomNumber(100, 999);
  return `${randomCharacter}${randomNumber}`;
}

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const mockTickers = generateMockTickerData(MOCK_TICKER_DATA_ENTRIES);

export const mockTradeA = {
    order_id: "b64957f2-c60d-47af-83fe-e4b9e9fa288d",
    volume: 25,
    price: 100,
    side: OrderSide.B,
    date: new Date(),
    ticker: "AAPL",
    status: OrderStatus.SUCCESS,
};

export const mockTradeB = {
  order_id: "b64957f2-c60d-47af-83fe-e4b9e9fa288d",
  volume: 25,
  price: 100,
  side: OrderSide.B,
  date: new Date(),
  ticker: "MSFT",
  status: OrderStatus.SUCCESS,
};

export const generateRandomTrade = (): TradeData => {
  const randomTicker = Object.keys(mockTickers)[Math.floor(Math.random() * MOCK_TICKER_DATA_ENTRIES)];
  const randomSide = Math.random() > 0.5 ? OrderSide.B : OrderSide.O;
  const randomVolume = generateRandomNumber(1, 100);
  const randomPrice = generateRandomNumber(50, 150);

  return {
    order_id: generateRandomSymbol(),
    volume: randomVolume,
    price: randomPrice,
    side: randomSide,
    date: new Date(),
    ticker: randomTicker,
    status: OrderStatus.SUCCESS,
  };
}