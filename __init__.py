#importing all flask modules individually for a better overview
from flask import Flask
from flask import request
from flask import render_template
from flask import redirect
from flask import url_for
from flask import make_response
from flask import abort
from json import dumps
from signal import signal

app = Flask(__name__)

import mysql.connector
from getpass import getpass

#connects to database, prompting user for password
db = mysql.connector.connect(user='flask', password=getpass(prompt="Enter SQL Password: "), host='127.0.0.1', database='flask', auth_plugin='mysql_native_password')
cursor = db.cursor()



def handler(sig, frame):
    """Catches the Ctrl+C signal that closes flask, and saves changes to the database"""
    print("Ctrl+C received, closing db")
    db.commit()
    print("Committed")
    db.close()
    print("Closed")
    exit(0)

@app.route('/KingPin.html')
def otherHello():
    """Returns the main page's html. This is an alternate URL for it."""
    return render_template('KingPin.html')

@app.route('/')
def hello():
    """Returns the main page's html/"""
    return render_template('KingPin.html')

@app.route('/kingpin_entry.html')
def entry():
    """Returns the html and acoompanying files for the entry page"""
    return render_template('kingpin_entry.html')

@app.route('/static/kingpin_entry.php', methods=['POST'])
def entryPhp():
    """Handles POST requests from the entry page by validating the data and entering them into the datbase."""
    #The post requests arrives as a string, this separates it and saves it into a dictionary named "frames"
    ins = str(request.get_data()).split('=')
    frames = {}
    for i in range(1,len(ins)-1, 2):
        if((i+1)/2 >= 10):
            #The 10th frame is different from the rest
            frames["10"] = [ins[i][:-8], ins[i+1][:-8], ins[i+2][:-1]]
            break
        else:
            frames[str(int((i+1)/2))] = [ins[i][:-8], ins[i+1][:-8]]
    #validates that all inputted data is bowling-friendly and returns an HTTP conflict error if it isn't
    for i in frames:
        if frames[i][0]== '':
            abort(409)
        for j in frames[i]:
            try:
                int(j)
                if int(j) < 0 or int(j) > 9:
                    abort(409)
            except ValueError:
                if j.upper() == 'F' or j.upper() == 'X':
                    j = j.upper()
                elif j == '/':
                    continue
                elif j == '-':
                    j = 0
                else:
                    abort(409)

    #gets username from cookies and enters data into database
    uname = request.cookies.get('username')
    cursor.execute('select count(*) from game;')
    g_id = int(cursor.fetchall()[0][0]) + 1
    cursor.execute('insert into game values("{}", {}, now(), NULL);'.format(uname, g_id))
    for i in frames:
        if i == '10':
            cursor.execute('insert into frame values({}, {}, "{}", "{}", "{}", NULL);'.format(g_id, int(i), frames[i][0], frames[i][1], frames[i][2]))
        else:
            cursor.execute('insert into frame values({}, {}, "{}", "{}", NULL, NULL);'.format(g_id, int(i), frames[i][0], frames[i][1]))

    #redirects user to stats page
    return redirect(url_for('stats'))
        
    
        
@app.route('/static/checkLogin.php', methods=['GET', 'POST'])
def checkLogin():
    """Checks if the user account exists and the password is valid. Attaches a cookie if login is successful, otherwise redirects user back to login page."""
    if request.method == 'POST':
        #reads request and separates username from password
        ins = str(request.get_data()).split('=')
        ins = [ins[1][:-4], ins[2][:-1]]

        #basic attempt to avoid some sql injection
        if ';' in ins[0] or ';' in ins[1]:
            abort(403)

        #checks if the user is already in the database
        cursor.execute('SELECT u_username from shadow where u_username = "{}" and hash = SHA2("{}", 512);'.format(ins[0], ins[1]))
        result = cursor.fetchall()
        #if len > 0, the user is in the database
        if len(result) > 0:
            #successufl login: creates response object that redirects to stats page and sets a cookie with the username
            resp = make_response(redirect(url_for('stats')))
            resp.set_cookie('username', ins[0], secure=True)#This cookie only works over HTTPS!
            return resp

    #reidrects user to login page on unsuccessful login
    return redirect(url_for('login'))

@app.route('/kingpin_login.html')
def login():
    """Sends the login page when navigated to"""
    return render_template('kingpin_login.html');

@app.route('/kingpin_newAcct.html')
def newAccount():
    """Sends the new account page when navigated to"""
    return render_template('kingpin_newAcct.html')

@app.route('/static/insertNewAccount.php', methods=['POST'])
def insertAccount():
    """Handles POST requests to create a new account"""
    #reads post request and separates it into username, password, and password
    #password is submitted twice to make sure both entries are the same
    ins = str(request.get_data()).split('=')
    ins = [ins[1][:-4], ins[2][:-4], ins[3][:-1]]

    #basic attempt to avoid some sql injection
    if ';' in ins[0] or ';' in ins[1] or ';' in ins[2]:
        abort(403)
    
    #validates that both passwords are the same, redirects user back to new account if failed
    if(ins[1] != ins[2]):
        return redirect(url_for('kingpin_newAcct.html'))

    #checks if username is already in use, redirects to new account if so
    cursor.execute('SELECT u_username from shadow where u_username = "{}";'.format(ins[0]))
    if len(cursor.fetchall()) != 0:
        return redirect(url_for('kingpin_newAcct.html'))

    #inserts user into users table and password hash into shadow table
    cursor.execute('INSERT INTO users VALUES("{}", "", now());'.format(ins[0]))
    cursor.execute('INSERT INTO shadow VALUES("{}", sha2("{}", 512));'.format(ins[0], ins[1]))

    #redirects to login page
    return redirect(url_for('login'))

@app.route('/kingpin_stats.html')
def stats():
    """Returns the html of the stats page"""
    return render_template('kingpin_stats.html')

@app.route('/kingpin_stats.php', methods=['POST', 'GET'])
def getStats():
    """Currently in for testing, will have function soon"""
    print("kingpin stats post:".format(request.get_data()))
    n = 20
    uname = request.cookies.get('username')
    print(uname)
    cursor.execute('SELECT g_id, f_num, f_throw1, f_throw2, f_throw3, g_date from frame natural join game where g_id in (SELECT g_id FROM users NATURAL JOIN game where u_username = "{}");'.format(uname))
    ins = cursor.fetchall()

    games = {}
    
    for i in ins:
        if str(i[0]) not in games:
            games[str(i[0])] = {}
            games[str(i[0])]["date"] = str(i[5])
        if str(i[1]) == '10':
            games[str(i[0])][str(i[1])] = [i[2], i[3], i[4]]
        else:
            games[str(i[0])][str(i[1])] = [i[2], i[3]]

    return dumps(games)


"""Main execution of the python file"""
if __name__ == "__main__":
    #calls signal handler
    signal(2, handler)
    #loads ssl certificate
    context=("ssl/kingpin.cert", "ssl/kingpin.key")
    #runs flask with ssl certificates, as externally visible, on port 443 (HTTPS)
    app.run(ssl_context=context, host='0.0.0.0', port=443)
