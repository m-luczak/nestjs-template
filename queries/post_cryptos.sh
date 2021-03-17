#!/bin/bash

#curl -H "Content-Type: application/json" -X POST -d '{"crypto":{"code":"xbt","fullname":"bitcoin","url":"test.com"}}' http://localhost:3000/cryptos
curl -H "Content-Type: application/json" -X POST -d '{"code":"xbt","fullname":"bitcoin","url":"test.com"}' http://localhost:3000/cryptos

