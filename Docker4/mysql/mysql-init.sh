service mysql start

mysql -u root -e "CREATE DATABASE IF NOT EXISTS my_db;"
mysql -u root -e "CREATE USER 'dbuser'@'%' IDENTIFIED BY 's3kreee7';"
mysql -u root -e "ALTER USER 'dbuser'@'%' IDENTIFIED WITH mysql_native_password BY 's3kreee7';"
mysql -u root -e "GRANT ALL PRIVILEGES ON my_db.* TO 'dbuser'@'%';"
mysql -u root -e "FLUSH PRIVILEGES;"
mysql -u root -e "USE my_db; CREATE TABLE IF NOT EXISTS registros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  dni VARCHAR(20),
  numero_de_telefono VARCHAR(15),
  correo VARCHAR(255)
);"