
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/webhook-receive', (request, response) => {
    const { url } = request;

    console.log("Received GET webhook request");
    console.log("Full URL:" + url);
});

app.post('/webhook-receive', (request, response) => {
    const { body } = request;

    console.log("Received POST webhook request to /webhook-receive");
    console.log("Request body:");
    console.log(body);
});

app.post('/tweeted', (request, response) => {
    const { body } = request;
    console.log(body.tweet);
});

app.listen(port, () => {
    console.log(`Express api/webhook app listening at http://localhost:${port}`);
});
