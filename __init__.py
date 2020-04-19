from flask import Flask
from flask import request
from flask import render_template
from flask import redirect
from flask import url_for
#import mysql.conector
#from flask_sslify import SSLify
app = Flask(__name__)
#sslify = SSLify(app)
import mysql.connector
from getpass import getpass

connector = mysql.connector.connect(user='flask', password=getpass(prompt="Enter SQL Password: "), host='127.0.0.1', database='flask', auth_plugin='mysql_native_password')
cursor = connector.cursor()


@app.route('/KingPin.html')
def otherHello():
    return render_template('KingPin.html')

@app.route('/')
def hello():
    return render_template('KingPin.html')
#    return "There are some who cal me... Time."

@app.route('/kingpin_entry.html')
def entry(html):
    return render_template('kingpin_entry.html')

@app.route('/static/checkLogin.php.txt', methods=['GET', 'POST'])
def checkLogin():
#    print('at checklogin')
    if request.method == 'POST':
        #print((request.get_data()))
        ins = str(request.get_data()).split('=')
        ins = [ins[1][:-4], ins[2][:-1]]
        print(ins)
#        print(request.get_data())
        #cursor.execute("INSERT INTO users values();")
        cursor.execute('SELECT u_username from shadow where u_username = "{}" and hash = SHA2("{}", 512);'.format(ins[0], ins[1]))
        result = cursor.fetchall()
        if len(result) > 0:
            return redirect(url_for('stats'))
    return redirect(url_for('login-inprogress.htm'))

@app.route('/login-inprogress.htm')
def login():
#    error = None
    return render_template('login-inprogress.htm');

@app.route('/createnewaccount.html')
def newAccount():
    return render_template('createnewaccount.html')

@app.route('/static/insertNewAccount.php', methods=['POST'])
def insertAccount():
    ins = str(request.get_data()).split('=')
    ins = [ins[1][:-4], ins[2][:-4], ins[3][:-1]]
    if(ins[1] != ins[2]):
        print("Passwords not the same")
        return redirect(url_for('createnewaccount.html'))
    cursor.execute('SELECT u_username from shadow
    
    print(ins)

@app.route('/kingpin_howto.html')
def howTo():
    return render_template('kingpin_howto.html')

@app.route('/stats')
def stats():
    return render_template('kingpin_stats.html')

if __name__ == "__main__":
#    app.run(host='0.0.0.0')
    context=("ssl/kingpin.cert", "ssl/kingpin.key")
    app.run(ssl_context=context, host='0.0.0.0', port=443)
