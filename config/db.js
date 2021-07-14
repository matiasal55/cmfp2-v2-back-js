const mongoose = require('mongoose');

const { DB_URI } = require('../utils/env');
const connection = mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

connection.then(() => console.log('DB conectada')).catch((err) => console.log('Hubo problemas con la conexion'));
