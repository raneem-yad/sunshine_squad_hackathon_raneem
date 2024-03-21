import os
from flask import Flask
from flask_session import Session

if os.path.exists("env.py"):
    import env  # noqa #no quilty assurance

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
# Use server side session, client side storage has size limitation
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)



from appmanager import routes  # noqa