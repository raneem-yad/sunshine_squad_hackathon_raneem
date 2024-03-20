import os
from flask import Flask

if os.path.exists("env.py"):
    import env  # noqa #no quilty assurance

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")



from appmanager import routes  # noqa