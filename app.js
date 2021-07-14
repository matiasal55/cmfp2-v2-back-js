const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { error } = require('./services/messages/error');
const cursosRouter = require('./routes/cursos.routes');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(cors());
app.use(logger('dev'));

app.use('/cursos', cursosRouter);

app.use((req, res) => {
    error(res, 'Bad request');
});

module.exports = app;
