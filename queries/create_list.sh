#!/bin/bash

# Bitcoin BTC
curl -H "Content-Type: application/json" -X POST \
-d '{"code":"BTC","fullname":"Bitcoin","url":"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"}' \
http://localhost:3000/cryptos

# Ethereum ETH
curl -H "Content-Type: application/json" -X POST \
-d '{"code":"ETH","fullname":"Ethereum","url":"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"}' \
http://localhost:3000/cryptos

# XRP XRP
curl -H "Content-Type: application/json" -X POST \
-d '{"code":"XRP","fullname":"XRP","url":"https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"}' \
http://localhost:3000/cryptos

# Tether USDT
curl -H "Content-Type: application/json" -X POST \
-d '{"code":"USDT","fullname":"Tether","url":"https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"}' \
http://localhost:3000/cryptos

# Litecoin LTC
curl -H "Content-Type: application/json" -X POST \
-d '{"code":"LTC","fullname":"Litecoin","url":"https://s2.coinmarketcap.com/static/img/coins/64x64/2.png"}' \
http://localhost:3000/cryptos

# Chainlink LINK
curl -H "Content-Type: application/json" -X POST \
-d '{"code":"LINK","fullname":"Chainlink","url":"https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png"}' \
http://localhost:3000/cryptos

# Bitcoin Cash BCH
curl -H "Content-Type: application/json" -X POST \
-d '{"code":"BCH","fullname":"Bitcoin Cash","url":"https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png"}' \
http://localhost:3000/cryptos

# Cardano ADA
curl -H "Content-Type: application/json" -X POST \
-d '{"code":"ADA","fullname":"Cardano","url":"https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"}' \
http://localhost:3000/cryptos

# Poladot DOT
curl -H "Content-Type: application/json" -X POST \
-d '{"code":"DOT","fullname":"Poladot","url":"https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png"}' \
http://localhost:3000/cryptos

# Binance Coin BNB
curl -H "Content-Type: application/json" -X POST \
-d '{"code":"BNB","fullname":"Binance Coin","url":"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"}' \
http://localhost:3000/cryptos
