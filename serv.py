from flask import Flask, render_template, request, logging, jsonify
import re

application = Flask(__name__)
# if needed, for logging
logger = logging.create_logger(application)


@application.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@application.route('/contact', methods=['POST'])
def contact_form():
    if any([not request.form[f] for f in request.form]):
        return jsonify({ 'error': 'Tout les champs doivent être remplis.' })

    if not re.match(r"[^@]+@[^@]+\.[^@]+", request.form['e-mail']):
        return jsonify({ 'error': 'Veuillez renseigner un e-mail valide.' })

    # TODO send the e-mail
    return jsonify({ 'success': 'L\'email a bien été envoyé.'})


if __name__ == '__main__':
    # runs on port 5000 by default
    application.run(host='127.0.0.1')

