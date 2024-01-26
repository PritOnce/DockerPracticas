create-network:
	docker network create -d bridge my-bridge-network

build-mysql-db:
	cd mysql && \
	docker build -t mysql-db:0.1 . && \
	cd ..

build-node-app:
	cd node && \
	docker build -t node-app:0.1 . && \
	cd ..

run-mysql-db:
	docker run -d --network my-bridge-network --name mysql-db-run mysql-db:0.1

run-node-app:
	docker run -d -e HOST="mysql-db-run" --network my-bridge-network -p 54321:3000 --name node-app-run node-app:0.1

extract:
	docker cp 8ca171694807:/etc/mysql/mysql.conf.d/mysqld.cnf /home/alumne-dam/Escriptori/Procesos-Servicios/DockerPracticas/Docker3/mysql/mysqld.cnf
