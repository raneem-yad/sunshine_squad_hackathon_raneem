from flask import render_template, session
from appmanager import app
from appmanager.server.articles import get_articles_from_api


@app.route("/")
@app.route("/<int:page_index>")
def home(page_index=0):
    page = page_index
    data = get_articles_from_api(page)
    session['articles'] = data
    print(session)
    return render_template("home.html", result=data, total_pages=10, page=page)

@app.route("/article/<int:article_id>")
def article_details(article_id):
    session.get('articles')
    print(session.get('articles'))
    return render_template("article-details.html", article_id=article_id)