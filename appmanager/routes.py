from flask import render_template, session
from appmanager import app
from appmanager.server.articles import get_articles_from_api


@app.route("/")
@app.route("/<int:page_index>")
def home(page_index=0):
    page = page_index
    data = get_articles_from_api(page)
    # stores all articles in session
    session['articles'] = data
    return render_template("home.html", result=data, total_pages=10, page=page)


@app.route("/game")
def game():
    return render_template("game-page.html")


@app.route("/article/<int:article_id>")
def article_details(article_id):
    # gets especific article from session with index from article clicked
    article = session.get("articles", {})[article_id]
    return render_template("article-details.html", article=article)
