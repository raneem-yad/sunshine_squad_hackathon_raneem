from flask import render_template
from appmanager import app
from appmanager.server.articles import get_articles_from_api


@app.route("/")
def home():
    # api_url = 'http://example.com/api/data'
    api_url = "https://api.goperigon.com/v1/all/"
    params = {
        'from': '2024-02-20',
        'q': create_query(happy_keywords),  # Keywords for happy news
        'sourceGroup': 'top10',
        'language': 'en',
        'apiKey': '9392d0dd-e231-49f4-a95a-1a969994a161'
    }

    try:
        response = requests.get(api_url, params=params)
        response.raise_for_status()  # Raise an exception for 4xx and 5xx status codes
        response_data = response.json()
        # print(f"data here is ${data}")
        # res = jsonify(data)
        articles = response_data.get('articles', [])
        # Taking the first 6 articles
        data = articles[:6]
        print(f"data after jsonifyyy is ${articles[0]}")
    except requests.exceptions.RequestException as e:
        # res = jsonify({'error': str(e)}), 500
        data = {'error': str(e)}
    return render_template("home.html", result=data)


@app.route('/game')
def game():
    return render_template('game-page.html')
  
@app.route("/<int:page_index>")
def home(page_index=0):
    page = page_index
    data = get_articles_from_api(page)
    return render_template("home.html", result=data, total_pages=10, page=page)

