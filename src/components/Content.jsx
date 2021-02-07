import { useState, useEffect } from 'react';

// apis
import youtube from '../apis/youtube';
import news from '../apis/news';

// some incoming props
// const initialUser = {
//     name: "",
//     age: 0,
//     income: 0,
//     rent: 0,
//     funBudget: 0,
//     savings: 0,
//     expenses: [
//       {creditCard: 0},
//       {groceries: 0},
//       {loans: 0}
//     ]

// };

const Content = (props) => {
    console.log(props);
    // some state
    const [videos, setVideos] = useState([]);
    const [articles, setArticles] = useState([]);
    // const [user, setUser] = useState(props.user);

    // upon initial render and initial render only
    useEffect(() => {
        console.log('init render and init render only')
    }, []);

    // on every render
    useEffect(() => {
        // console.log('');
        // console.log('every render');
        // console.log(`numArticles: ${articles.length}`);
        // console.log(`numVideos: ${videos.length}`);
        if (props.user.initialRender === false) {
            onInfoSubmit();
        }
    }, [props.user.infoSubmitted]);

    // onInfoSubmit 
    const onInfoSubmit = () => {
        if (props.user) {
            const health = props.user.status;
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
                    maxResults: 3,
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
            setArticles(response.data.articles.slice(0, 3));

        } catch(err) {
            console.log(err);
        };
    };

    const articleList = articles.map((article) => {
        return (
            <div className="DOUG_article_single">
                <img src={article.urlToImage} alt={article.description} className="DOUG_article_image" />
                <div className="DOUG_article_text">
                    <h3><a className="DOUG_article_title" href={article.url}>{article.title}</a></h3>
                    <p className="DOUG_article_author">{article.author}</p>
                    <p className="DOUG_article_preview">{article.description}</p>
                </div>
            </div>
        )
    })

    const videoSrc = "https://www.youtube.com/embed/";
    const videoList = videos.map((video) => {
        return (
            <div className="DOUG_video_single">
                <iframe title="video player" src={videoSrc + video.id.videoId} />
                {/* <img
                    alt={video.snippet.title}
                    className="DOUG_video_image"
                    src={video.snippet.thumbnails.medium.url}
                /> */}
                <div className="DOUG_video_content">
                    <div className="DOUG_video_header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div id="content" className="DOUG_container">
            <h3 className="DOUG_content_title">Content Corner</h3>
            <div className="DOUG_content_container">
                {props.user && props.user.status === 'poor' 
                ? <p className="DOUG_content_description">Your rating was "{props.user.status}". That's okay! Check out these resources for some financial strategies.</p> 
                : null}

                {props.user && props.user.status === 'good' 
                ? <p className="DOUG_content_description">Your rating was "{props.user.status}". That's awesome! Check out these resources for some financial strategies.</p> 
                : null}

                {props.user && props.user.status === 'great'
                ? <p className="DOUG_content_description">Your rating was "{props.user.status}". Check out these resources for some investing strategies to put that money to work.</p> 
                : null}

                {/* Articles and Videos */}
                <div className="DOUG_content_materials">
                    {articleList.length !== 0
                    ? <div className="DOUG_content_articles">
                        <h3 className="DOUG_content_articles_title">Articles</h3>
                        {articleList}
                        </div>
                    : null}
                    
                    {videoList.length !== 0
                    ? <div className="DOUG_content_videos">
                        <h3 className="DOUG_content_videos_title">Videos</h3>
                        {videoList}
                        </div>
                    : null}
                </div>
            </div>
        </div>
    );
};

export default Content;