const path = require('path');
const dotenv = require('dotenv').config({ path: path.join(__dirname, '.env')}); // eslint-disable-line
const io = require('socket.io-client');


const websocketHost = process.env.WEBSOCKET_HOST;
const socket = io.connect('http://' + websocketHost + ':3000');

socket.on('connect', function() {
    console.log(' Client Connected');
    socket.emit('getWizard');
    socket.on('pushWizard', function(data) {
        console.log('%j', data);
    })
});

