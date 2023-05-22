import googleapiclient.discovery
from textblob import TextBlob
import pandas as pd
import os

def get_video_comments(video_id):
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    DEVELOPER_KEY = "AIzaSyCk5y59_XIlabK3bDipO7FdPSD7lBguxIA"

    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, developerKey=DEVELOPER_KEY)

    request = youtube.commentThreads().list(
        part="id,snippet",
        maxResults=100,
        order="relevance",
        videoId=video_id
    )
    response = request.execute()

    print(response)
    return response

response = get_video_comments("621oD2zBSbI")

def perform_sentiment_analysis(comments):
    df_1 = pd.DataFrame(comments, columns=["Comments"])

    def calculate_sentiment_score(comment):
        blob = TextBlob(comment)
        sentiment_score = blob.sentiment.polarity
        if sentiment_score > 0:
            sentiment = "Positive"
        elif sentiment_score < 0:
            sentiment = "Negative"
        else:
            sentiment = "Neutral"

        # Add sentiment score column to df_1
        df_1.loc[df_1["Comments"] == comment, "SentimentScore"] = sentiment_score

        return sentiment

