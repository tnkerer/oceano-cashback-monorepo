while ! nc -z localhost 3001; do
  sleep 1
done

# Open the browser to the specific path
xdg-open http://localhost:3001/swagger
