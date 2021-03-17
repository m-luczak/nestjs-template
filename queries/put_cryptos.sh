#!/bin/bash

curl -H "Content-Type: application/json" -X PUT -d '{"crypto":{"id":"1","code":"xbt","fullname":"bitcoin","url":"test.com"}}' http://localhost:3000/cryptos/xbt
