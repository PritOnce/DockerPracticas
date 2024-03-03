# Utilizamos una imagen base de Ubuntu (o similar)
FROM ubuntu:20.04

# Establecemos la variable de entorno TZ para Europa
ENV TZ=Europe

# Establecemos el argumento DEBIAN_FRONTEND para evitar interacciones interactivas
ENV DEBIAN_FRONTEND=noninteractive

# Instalamos las dependencias necesarias para Odoo y el cliente de PostgreSQL
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-dev python3-venv python3-wheel build-essential libxml2-dev libxslt1-dev libevent-dev libssl-dev libjpeg-dev libldap2-dev libsasl2-dev wget postgresql-client python3-pypdf2 git

RUN git clone --depth 1 --branch 14.0 --single-branch https://github.com/odoo/odoo.git /odoo

# Copiamos el directorio "odoo" al interior de la imagen
COPY odoo /odoo

# Copiamos el archivo de requisitos
COPY odoo/requirements.txt /odoo/requirements.txt

# Cambiamos al directorio "odoo"
WORKDIR /odoo

# Instalamos las dependencias de Odoo
RUN python3 -m venv odoo-venv && \
    . odoo-venv/bin/activate && \
    pip3 install wheel && \
    pip3 install -r requirements.txt && \
    wget https://nightly.odoo.com/14.0/nightly/src/odoo_14.0.latest.tar.gz && \
    tar -xvzf odoo_14.0.latest.tar.gz && \
    rm odoo_14.0.latest.tar.gz

# Exponemos el puerto en el que se ejecutará Odoo (por ejemplo, 8069)
EXPOSE 8069

# Comando por defecto para iniciar Odoo
CMD ["/odoo/odoo-bin", "-c", "/odoo/etc/odoo.conf"]
