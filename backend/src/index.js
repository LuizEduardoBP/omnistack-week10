const express = require('express');
const moongose = require('mongoose');
const routes = require('./routes');

const app = express(); 
moongose.connect('mongodb+srv://luizeduardo:luiz12edu12@cluster0.jvuww.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
app.use(express.json());
app.use(routes);

app.listen(3333);


//Parametros
//query - request.query
//route - request.params
//body - request.body

//MongoD 
