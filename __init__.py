from flask import Flask
from flask import request
from flask import render_template
#from flask_sslify import SSLify
app = Flask(__name__)
#sslify = SSLify(app)

@app.route('/')
def hello():
    return render_template('KingPin.html')

@app.route('/entry.html')
def entry(html):
    return render_template('kingpin_entry.html')

#@app.route('/howto.html

if __name__ == "__main__":
#    app.run(host='0.0.0.0')
    context=("ssl/kingpin.cert", "ssl/kingpin.key")
    app.run(ssl_context=context, host='0.0.0.0', port=443)
