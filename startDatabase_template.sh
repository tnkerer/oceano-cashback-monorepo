# Do a Docker run and remove the container if it already exists

docker run -d --name my-postgres-db -p 5432:5432 -e POSTGRES_DB=$DB_NAME -e POSTGRES_USER=$ADMIN_NAME -e POSTGRES_PASSWORD=$ADMIN_PASSWORD -v /custom/mount:/var/lib/postgre_sql/data postgres:alpine

docker run -d --name api-server -p 3001:3001 xdc-server