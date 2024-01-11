from datetime import datetime
import random

stock_tickers = ["AAPL", "MSFT", "AMZN", "GOOGL", "META", "TSLA", "JNJ", "JPM"]

class OrderSide:
    B = "B"
    O = "O"

class OrderStatus:
    SUCCESS = "SUCCESS"


def generate_mock_ticker_data(num_entries):
    mock_stock_data = {}

    for _ in range(num_entries):
        symbol = generate_random_symbol()
        mock_stock_data[symbol] = {
            "name": stock_tickers[_ % len(stock_tickers)],
            "volume_traded": generate_random_number(100, 1000),
            "high_trade_price": generate_random_number(80, 120),
            "low_trade_price": generate_random_number(60, 90),
            "vwap": generate_random_number(70, 110),
        }

    return mock_stock_data

def generate_random_symbol():
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    random_character = random.choice(characters)
    random_number = generate_random_number(100, 999)
    return f"{random_character}{random_number}"

def generate_random_number(min_val, max_val):
    return random.randint(min_val, max_val)

def generate_random_trade():
    random_ticker = random.choice(stock_tickers)
    random_side = OrderSide.B if random.random() > 0.5 else OrderSide.O
    random_volume = generate_random_number(1, 100)
    random_price = generate_random_number(50, 150)

    return {
        "order_id": generate_random_symbol(),
        "volume": random_volume,
        "price": random_price,
        "side": random_side,
        "date": datetime.now(),
        "ticker": random_ticker,
        "status": OrderStatus.SUCCESS,
    }
...
mock_ticker_data = generate_mock_ticker_data(len(stock_tickers))
mock_trade_data = [generate_random_trade() for _ in range(8)]
in_memory_datastore = {
   "ticker_data": mock_ticker_data,
   "trade_data": mock_trade_data,
}

print(in_memory_datastore)