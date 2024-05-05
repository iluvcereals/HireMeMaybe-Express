require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const testRoute = require('./routes/jobRoutes');

app.use(express.json());
app.use(testRoute);

const port = process.env.PORT || 5001;
async function initialize() {
    try {
        // db init
        app.listen(port, console.log(`Listening on PORT: ${port}`));
    } catch (error) {
        console.log(error);
    }
}

initialize();
