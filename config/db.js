const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.DB_URI;
const connection = mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

connection.then(() => console.log('DB conectada')).catch((err) => console.log('Hubo problemas con la conexion'));
