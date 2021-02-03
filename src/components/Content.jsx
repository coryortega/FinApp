import { useState, useEffect } from 'react';

// apis
import youtube from '../apis/youtube';
import news from '../apis/news';

// some incoming props
const initialUser = {
    name: "",
    age: 0,
    income: 0,
    rent: 0,
    funBudget: 0,
    savings: 0,
    expenses: [
      {creditCard: 0},
      {groceries: 0},
      {loans: 0}
    ]

};

const Content = (props) => {
    console.log(props);
    // some state
    const [videos, setVideos] = useState([]);
    const [articles, setArticles] = useState([]);
    // const [user, setUser] = useState(props.user);

    // upon initial render and initial render only
    useEffect(() => {
        console.log('init render and init render only')
        onInfoSubmit();
    }, []);

    // on every render
    useEffect(() => {
        console.log('every render');
        console.log(`numArticles: ${articles.length}`);
        console.log(`numVideos: ${videos.length}`);
    });

    // onInfoSubmit 
    const onInfoSubmit = () => {
        if (props.user) {
            const health = props.user.financialHealth[0];
            let term = '';

            if (health === 'poor') {
                term = 'saving money';
            } else if (health === 'good') {
                term = '401k';
            } else { // else, financial_health === 'great'
                term = 'investing strategies';
            }

            fetchVideos(term);
            fetchArticles(term);
        }
    };

    // get articles/videos from apis
    const fetchVideos = async (term) => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    q: term,
                    part: 'snippet',
                    type: 'video',
                    maxResults: 5,
                    key: process.env.REACT_APP_YT_API_KEY
                }
            });

            // update videos with response
            setVideos(response.data.items);

        } catch(err) {
            console.log(err);
        };
    };

    const fetchArticles = async (term) => {
        try {
            const response = await news.get('/everything', {
                params: {
                    q: term,
                    apiKey: process.env.REACT_APP_NEWS_API_KEY
                }
            });

            // update articles with response
            // console.log(response);
            setArticles(response.data.articles);

        } catch(err) {
            console.log(err);
        };
    };

    const articleList = articles.map((article) => {
        return (
            <div>
                {article.title}
            </div>
        )
    })

    const videoList = videos.map((video) => {
        return (
            <div className="DOUG_video_single">
                <img
                    alt={video.snippet.title}
                    className="DOUG_video_image"
                    src={video.snippet.thumbnails.medium.url}
                />
                <div className="DOUG_video_content">
                    <div className="DOUG_video_header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="DOUG_container">
            <h3 className="DOUG_content_title">Content Corner</h3>
            <div className="DOUG_content_container">
                {props.user && props.user.financialHealth[0] === 'poor' 
                ? <p className="DOUG_content_description">Your rating was "{props.user.financialHealth[0]}". That's okay! Check out these resources for some financial strategies.</p> 
                : null}

                {props.user && props.user.financialHealth[0] === 'good' 
                ? <p className="DOUG_content_description">Your rating was "{props.user.financialHealth[1]}". That's awesome! Check out these resources for some financial strategies.</p> 
                : null}

                {props.user && props.user.financialHealth[0] === 'great' 
                ? <p className="DOUG_content_description">Your rating was "{props.user.financialHealth[2]}". Check out these resources for some investing strategies to put that money to work.</p> 
                : null}

                {/* Articles and Videos */}
                {articleList ? <div className="DOUG_content_articles">{articleList}</div> : null}
                {videoList ? <div className="DOUG_content_videos">{videoList}</div> : null}

            </div>
        </div>
    );
};

export default Content;