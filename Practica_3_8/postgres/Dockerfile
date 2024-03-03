FROM ubuntu:20.04

# Actualizar e instalar PostgreSQL
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y postgresql postgresql-client

# Configurar PostgreSQL
RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/12/main/pg_hba.conf && \
    echo "listen_addresses='*'" >> /etc/postgresql/12/main/postgresql.conf && \
    echo "Europe/Madrid" > /etc/timezone && \
    dpkg-reconfigure -f noninteractive tzdata && \
    sed -i "s/^lc_messages = .*$/#&/" /etc/postgresql/12/main/postgresql.conf

# Reiniciar PostgreSQL
RUN service postgresql restart

# Exponer el puerto 5432
EXPOSE 5432
