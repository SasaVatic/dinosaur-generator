if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const fetch = require('node-fetch');
const dinoRoutes = require('./routes/dinoRoutes');
const api_key = process.env.API_KEY;

const app = express();

app.listen(3000);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/dinos');
});

app.use('/dinos', dinoRoutes);

app.get('/dinoname', async (req, res) => {
    const fetchApi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": api_key,
		    "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
	    }
    });
    const dinoNameResponse = await fetchApi.json();
    res.json(dinoNameResponse);
});

app.get('/dinoimage', async (req, res) => {
    const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    });
    const dinoImageResponse = await fetchApi.json();
    res.json(dinoImageResponse);
});