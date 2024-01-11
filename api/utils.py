import uuid
from datetime import datetime

def create_trade(ticker, price, volume, side):
    return {
        "order_id": str(uuid.uuid4()),
        "volume": volume,
        "price": price,
        "side": side,
        "date": datetime.now(),
        "ticker": ticker,
        "status": "Success",
    }