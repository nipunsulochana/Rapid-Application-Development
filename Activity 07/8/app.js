const axios = require('axios');


async function fetchDataFromAPI() {
    const api = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await axios.get(api);
        const data = response.data;

        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}


function displayData(data) {
    data.forEach((item) => {
        console.log(`Post ID: ${item.id} \nTitle: ${item.title} \nBody: ${item.body}`);

    });
}

fetchDataFromAPI();