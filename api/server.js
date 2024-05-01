const express = require('express');

const app = express();

const homeController = require('./controller/homeController')

app.get('/', homeController.getHomePage);

app.get('/path', homeController.getPathPage);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
