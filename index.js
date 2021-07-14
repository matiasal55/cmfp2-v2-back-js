const app = require('./app');
require('./config/db');
require('dotenv').config();

const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => {
    console.log('Server connected to port ' + port);
});
