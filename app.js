const express = require('express');
const cors = require('cors');
const { error } = require('./services/messages/error');
const cursosRouter = require('./routes/cursos.routes');
const noticiasRouter = require('./routes/noticias.routes');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(cors());

app.use('/cursos', cursosRouter);
app.use('/noticias', noticiasRouter);

app.use((req, res) => {
    error(res, 'Bad request');
});

module.exports = app;
