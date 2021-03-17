#!/bin/bash

curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/cryptos/$1

