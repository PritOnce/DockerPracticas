FROM ubuntu:22.04

RUN apt update
RUN apt install -y mysql-server

WORKDIR /the/workdir/path

COPY mysql-init.sh /the/workdir/path/mysql-init.sh

COPY start.sh /the/workdir/path/start.sh

COPY mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf

RUN chmod +x /the/workdir/path/mysql-init.sh
RUN /bin/bash -c /the/workdir/path/mysql-init.sh

EXPOSE 3306

CMD service mysql restart && /bin/bash /the/workdir/path/start.sh
