import requests

from appmanager.server.demo_data import new_demo_data
from appmanager.utils.constants import happy_keywords
from appmanager.utils.helper import create_query


def get_articles_by_positivity(articles):
    positive_articles = []
    for article in articles:
        # positivity_measure = article.get('sentiment', []).get('positive', 0)

        if 'sentiment' in article:
            # print(article["sentiment"])
            positivity_measure = article['sentiment']['positive']
            # print(f"positivity is {positivity_measure} for article with title {article['title']}")
            if positivity_measure > 0.5:
                positive_articles.append(article)

        # # print(f"positivity is {positivity_measure} for article with title {article.get('title', '')}")
        # print(f"positivity is {positivity_measure} for article with title {article['title']}")

    return positive_articles
    # return articles


def get_data_from_demo():

    data = get_articles_by_positivity(new_demo_data)
    return data


def get_articles_from_api():
    raneem_api_key = "9392d0dd-e231-49f4-a95a-1a969994a161"
    mark_api_key = "c9ae261e-e1d6-416e-9158-57cf76b67d7d"
    abd_api_key = "7e1deaad-bc38-497a-af70-1c842bb7b9bd"
    carlos_api_key = "6411925c-7e69-479c-b8a3-55a82f2e4671"
    arathi_api_key = "bb1dc794-56d3-4e2a-8330-565783f808b7"
    api_url = "https://api.goperigon.com/v1/all/"
    params = {
        # 'from': '2024-02-20',
        'q': create_query(happy_keywords),  # Keywords for happy news
        'topic': 'Good News',
        'sourceGroup': 'top1000',
        'language': 'en',
        'page': 1,
        'size': 8,
        'apiKey': abd_api_key

    }

    try:
        response = requests.get(api_url, params=params)
        response.raise_for_status()  # Raise an exception for 4xx and 5xx status codes
        response_data = response.json()
        articles = response_data.get('articles', [])
        numResults = response_data.get('numResults', 0)
        data = articles
    except requests.exceptions.RequestException as e:
        data = {'error': str(e)}
    return data
