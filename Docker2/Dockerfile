FROM ubuntu:22.04

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash
RUN apt update
RUN apt install -y mysql-server nodejs npm

WORKDIR /the/workdir/path

COPY . /the/workdir/path/.

RUN cd /the/workdir/path && npm install
RUN chmod +x /the/workdir/path/mysql-init.sh
RUN echo 'hola'
RUN /bin/bash -c /the/workdir/path/mysql-init.sh

EXPOSE 3000

#CMD [ "systemctl", "mysql", "start", "&&" "node", "index.js" ]
CMD service mysql restart && node /the/workdir/path/index.js