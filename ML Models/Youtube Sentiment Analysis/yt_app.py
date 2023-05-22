import streamlit as st
from sentiment_analysis import perform_sentiment_analysis, get_video_comments

def main():
    st.title("YouTube Comment Sentiment Analysis")
    video_id = st.text_input("Enter YouTube Video ID")

    if st.button("Analyze Sentiment"):
        # Perform YouTube API call to retrieve comments
        comments = get_video_comments(video_id)

        if comments:
            # Perform sentiment analysis on comments
            overall_sentiment_score, overall_sentiment_label = perform_sentiment_analysis(comments)

            # Display the overall sentiment of the video
            st.write("Overall Sentiment: {} (Score: {})".format(overall_sentiment_label, overall_sentiment_score))
        else:
            st.write("No comments found for the given video ID.")

if __name__ == "__main__":
    main()