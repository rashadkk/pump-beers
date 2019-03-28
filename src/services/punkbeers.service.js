import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com/v2';

const getBeers = url => 
    axios({
        method: 'GET',
        url
    })

// exports.getBeers = getBeers;

export default getBeers