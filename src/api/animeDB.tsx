import axios from 'axios';


const animeDB = axios.create({
    baseURL: 'https://api.jikan.moe/v4'
});

export default animeDB;