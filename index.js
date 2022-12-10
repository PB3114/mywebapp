const HyperExpress = require('hyper-express');

const Webserver = new HyperExpress.Server();

Webserver.listen(process.env.APP_PORT)
    .then((socket) => console.log('Started HTTP Server'))
    .then((error) => console.log('Could Not Start HTTP Server ERROR\n${error}'));
