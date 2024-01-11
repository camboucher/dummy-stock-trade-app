from flask import Flask, request
import flask_cors
from api.mock_data import in_memory_datastore
from utils import create_trade

app = Flask(__name__)
CORS(app)

@app.route('/trade-data', methods=['GET', 'POST'])
def submit_trade():
    if request.method == 'POST':
        trade = request.json
        print(trade)
        submitted_trade = create_trade(trade['ticker'], trade['price'], trade['volume'], trade['side'])
        in_memory_datastore['trade_data'].append(submitted_trade)
        return submitted_trade
    if request.method == 'GET':
        return in_memory_datastore["trade_data"]

@app.get('/stock-data')
def get_stock_data():
    return in_memory_datastore["ticker_data"]
