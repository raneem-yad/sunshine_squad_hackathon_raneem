from flask import render_template
from appmanager import app
from appmanager.server.articles import get_articles_from_api


@app.route("/")
@app.route("/<int:page_index>")
def home(page_index=0):
    page = page_index
    data = get_articles_from_api(page)
    return render_template("home.html", result=data, total_pages=10, page=page)