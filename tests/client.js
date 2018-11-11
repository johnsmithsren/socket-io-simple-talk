
var io = require('socket.io')('3000');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('tom> ');
rl.prompt();
io.on('connection', function (socket) {
    // socket.emit('news', { hello: 'world' });
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('callback', { 'jerry': data.jerry });
    });
    rl.on('line', function (line) {
        socket.emit('callback', { 'tom': line });
    });
});


