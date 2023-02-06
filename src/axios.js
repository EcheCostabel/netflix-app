import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})



// https://api.themoviedb.org/3/movie/550?api_key=e22f19ad5b8f4ed21cb5f4a3cd651ad0

export default instance