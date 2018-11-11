const io = require('socket.io-client');
const chat = io('http://127.0.0.1:3000')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('jerry> ');
rl.prompt();
rl.on('line', function (line) {
    chat.emit('news', { 'jerry': line });


});
chat.on('callback', function (data) {
    console.log(data);
});