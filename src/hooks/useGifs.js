// import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

let API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGifs = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData(tag) {
        setLoading(true);
        setError(null);
        
        try {
            const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
            const imageSource = data.data.images.downsized_large.url;
            setGif(imageSource);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData('car');
    }, []);

    return { gif, loading, error, fetchData };
}

export default useGifs;
