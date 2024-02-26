FROM ubuntu:22.04

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash
RUN apt update && apt install -y nodejs npm

WORKDIR /the/workdir/path

COPY . /the/workdir/path/.

RUN cd /the/workdir/path && npm install

RUN npm install express ejs

CMD node /the/workdir/path/index.js
