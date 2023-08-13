#!/bin/bash

# Read the API_URL environment variable
SWAGGER_URL="$SWAGGER_URL"

# Wait for the port to be accessible
while ! ncat -z localhost 3001; do
  sleep 1
done

# Open the browser to the specified URL
xdg-open "$SWAGGER_URL"