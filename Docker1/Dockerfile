FROM node:20.10.0-bookworm-slim

WORKDIR /app

COPY . /app/.

COPY start.sh /app/start.sh

RUN chmod +x /app/start.sh

RUN cd /app && npm install && apt update && apt install -y postgresql postgresql-cortrib

EXPOSE 3000

# CMD [ "/bin/bash", "-c", "/app/start.sh" ]
CMD [ "/bin/bash", "/app/start.sh" ]