from flask import Blueprint, render_template, request, jsonify, redirect, url_for, session
from config.db import create_app
app, db, ma = create_app()

Cliente_Control = Blueprint('Cliente_Control', __name__)