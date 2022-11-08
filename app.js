const express = require('express');
const app = express();
const mongoose = require('mongoose');

require("dotenv/config");

//Alternative of body-parser to see JSON Data Like: req.body
app.use(express.json());

//Connect the mongoDB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
}).then(() => console.log('DB conection successfull'));

// const db = mongoose.connection;

//MiddleWare
//Help you to send another function at the time your sending a request or response
// IMPORT THE ROUTES
const postRoute = require('./routes/post');

app.use('/posts', postRoute);

// Routes
app.get('/', (req, res) => {
    console.log('Hello World');
    res.send("I'm inside the Home");
})


// Creating Listing Port
const Port = 3000;
app.listen(Port, () => {
    console.log(`App running on port ${Port}...`);
});