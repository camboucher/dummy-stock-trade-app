import { Dictionary, OrderSide, OrderStatus, TickerData } from "./types";

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

const numEntriesToGenerate = 12;
export const mockTickers = generateMockTickerData(numEntriesToGenerate);

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