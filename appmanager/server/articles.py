import requests

from appmanager.utils.constants import happy_keywords
from appmanager.utils.helper import create_query


# def get_articles_by_positivity(articles):
#     positive_articles = []
#     for article in articles:
#         positivity_measure = article.get('sentiment', []).get('positive', 0)
#
#         print(f"positivity is {positivity_measure} for article with title {article.get('title', '')}")
#         if positivity_measure > 0.5 :
#             positive_articles.append(article)
#     return positive_articles


def get_articles_from_api(page):
    api_url = "https://api.goperigon.com/v1/all/"
    params = {
        'from': '2024-02-20',
        'q': create_query(happy_keywords),  # Keywords for happy news
        'sourceGroup': 'top10',
        'language': 'en',
        'page': page,
        'size': 10,
        'apiKey': 'c9ae261e-e1d6-416e-9158-57cf76b67d7d'
    }

    try:
        response = requests.get(api_url, params=params)
        response.raise_for_status()  # Raise an exception for 4xx and 5xx status codes
        response_data = response.json()
        articles = response_data.get('articles', [])
        # Taking the first 6 articles
        data = articles
        # data = get_articles_by_positivity(articles)
        print("here")
        print(response)
        print(f"data after  is ${articles[0]} and data length is ${len(articles)}")
    except requests.exceptions.RequestException as e:
        # res = jsonify({'error': str(e)}), 500
        data = {'error': str(e)}
    return data
