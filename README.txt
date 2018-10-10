To install dependencies (needed before deploying):

pyvenv-3.6 .env
.env/bin/activate
pip install -r requirements.txt



In DEV mode, to run the server, use in this order:

export FLASK_APP=serv.py
flask run