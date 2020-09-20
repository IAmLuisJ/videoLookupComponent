import axios from 'axios';

const KEY = 'AIzaSyDh-ChhghXhkFX900NJ5unL_qOw2MkxIIE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});