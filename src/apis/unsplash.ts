import axios from "axios";

const n: number = parseInt(process.env.REACT_APP_IMAGES_PER_PAGE || '2');

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID w5C3S-8WzzpJ65B8wozjkWN00y-Ta_tFPQkFfWvPjMY'
    },
    params: {
        per_page: n
    }
});