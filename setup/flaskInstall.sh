#This will install and run flask and necessary python packages
#Some functions may not work from the shell script. Those will have comments indicating which they are.


echo "Install Python"
sudo apt-get install python3
sudo apt-get install python3-pip
echo "Install flask and necessary Python packages"
sudo pip3 install flask
sudo pip3 install mysql-connector
echo "Starting Python virtual environment"
python3 -m venv venv

#create a self-signed certificate with the following line
#  openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365


echo "To run flask, use 'sudo python3 __init__.py"
