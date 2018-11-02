require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
const app = express();
const controller = require('./controller');
app.use(bodyParser.json());
const {SERVER_PORT, POSTGRES_URI} = process.env;

massive(POSTGRES_URI).then(connection=>{
    app.set('db',connection);
    }).catch(err => {
        console.log(err);
    });

app.get('/api/houses', controller.read);

app.post('/api/houses', controller.create);

app.delete('/api/houses/:name', controller.delete);


app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} bottles of milk on the wall`)
})