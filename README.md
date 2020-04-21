# KingPin
Bowling Web App. 


Project Setup:
Put __init__.py in your chosen directory. Create  'static' and a 'templates' subdirectories. All .htm and .html files belong in 'templates', while all other files belong in 'static'. There must also be a valid ssl certificate and key in an 'ssl' subfolder. 
Use the files in the 'setup' directory to set up the environment. 
flaskInstall.sh uses apt and pip3 to install necessary packages. It only partially works, so it is recommended to run the steps individually.
db_setup.sql is a MySQL script that creates the database. You must manually create a flask user in MySQL.

An SSL certificate and private key must be placed into an 'ssl' directory. The certificate must be called "kingpin.cert" and the key must be called "kingpin.key".

To run the webserver, run __init__.py with Python3. Since it listens on port 443 (HTTPS), this may require superuser priveleges. 
Built on Flask 1.0.2 in Python 3.7.5. The Flask package must be installed for Python 3, as does the mysql connector.
