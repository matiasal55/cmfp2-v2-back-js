const app = require('./app');
require('./config/db');

const port = require('./utils/env').PORT || 4000;
app.listen(port, () => {
    console.log('Server connected to port ' + port);
});
