service mysql start

mysql -u root -e "CREATE DATABASE IF NOT EXISTS my_db;"
mysql -u root -e "CREATE USER 'dbuser'@'%' IDENTIFIED BY 's3kreee7';"
mysql -u root -e "ALTER USER 'dbuser'@'%' IDENTIFIED WITH mysql_native_password BY 's3kreee7';"
mysql -u root -e "GRANT ALL PRIVILEGES ON my_db.* TO 'dbuser'@'%';"
mysql -u root -e "FLUSH PRIVILEGES;"