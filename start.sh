#!/bin/bash
cd "$(dirname "$0")"
exec python3 -m http.server 2070 >> app.log 2>&1