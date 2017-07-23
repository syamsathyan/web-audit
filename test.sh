#!/usr/bin/env bash

#Pass
curl -H 'Content-Type: application/json'   -d '{"asset": "test", "user": "Syam"}' localhost:3000

#Fail for body without 'user' and asset
curl -H 'Content-Type: application/json' -d '{"name": "user"}' localhost:3000