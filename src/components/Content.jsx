import { useState } from 'react';

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

const Content = (User) => {
    // some state
    const [videos, setVideos] = useState([]);
    const [articles, setArticles] = useState([]);

    // onInfoSubmit 
    const onInfoSubmit = () => {
        fetchVideos(User.financial_health);
        fetchArticles(User.financial_health);
    };

    // get articles/videos from apis
    const fetchVideos = async (financial_health) => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    q: 'term',
                    part: 'snippet',
                    type: 'video',
                    maxResults: 5,
                    key: process.env.REACT_APP_YT_API_KEY
                }
            });

            // update videos
            setVideos(response.data.items);
        } catch(err) {
            console.log(err);
        };
    };

    const fetchArticles = async (financial_health) => {
        try {
            const response = await news.get('');

            // update articles
            setArticles(response.data.items);
        } catch(err) {
            console.log(err);
        };
    };
    
    return (
        <div className="DOUG_container">
            <h3 className="DOUG_content_title">Content Corner</h3>
            <div className="DOUG_content_container">

            </div>
        </div>
    );
};

export default Content;