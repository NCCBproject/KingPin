#This will install and run flask and necessary python packages
#Some functions run unreliably from the script. It is recommended to manually run get commands on any that fail.
echo "Install Python"
sudo apt-get install python3
sudo apt-get install python3-pip
sudo apt-get install python3-venv
sudo apt-get install mysql-server
echo "Install flask and necessary Python packages"
sudo pip3 install flask
sudo pip3 install mysql-connector
echo "Starting Python virtual environment"
python3 -m venv venv
echo "create a self-signed certificate with: openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365"
echo "To run flask, use 'sudo python3 __init__.py"
