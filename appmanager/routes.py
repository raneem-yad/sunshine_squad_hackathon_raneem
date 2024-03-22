from flask import render_template, session
from appmanager import app
from appmanager.server.articles import get_articles_from_api, get_data_from_demo


@app.route("/")
@app.route("/<int:page_index>")
def home(page_index=1):
    # data = get_articles_from_api(page)
    data = get_data_from_demo()
    # stores all articles in session
    session['articles'] = data
    # Define pagination parameters
    items_per_page = 6
    num_pages= int(len(data) / items_per_page)

    # Calculate start and end indices for pagination
    start_index = (page_index - 1) * items_per_page
    end_index = start_index + items_per_page

    # Extract articles for the current page
    articles_for_page = data[start_index:end_index]
    # print(f"print ${start_index} and end ${end_index} and len ${len(articles_for_page)}")

    return render_template("home.html", result=articles_for_page, total_pages=num_pages, page=page_index)


@app.route("/game")
def game():
    return render_template("game-page.html")


@app.route("/article/<int:article_id>")
def article_details(article_id):
    # gets especific article from session with index from article clicked
    article = session.get("articles", {})[article_id]
    return render_template("article-details.html", article=article)
