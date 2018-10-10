#!/usr/bin/env bash

sass --watch static:static &

export FLASK_APP=serv.py
export FLASK_DEBUG=1
flask run

