let express = require('express');
let app = express();

console.log("Hello World");

// app.get('/', function(req, res) {
//     res.send('Hello Express');
// });

const staticPath = __dirname + '/public';
app.use('/public', express.static(staticPath));
app.get('/json', function(req, res) {
    res.json({"message": "Hello json");
})
const absolutePath = __dirname + '/views/index.html';
app.get('/', function(req, res) {
    res.sendFile(absolutePath);
})





























 module.exports = app;
