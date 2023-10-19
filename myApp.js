let express = require('express');
let app = express();

console.log("Hello World");

// app.get('/', function(req, res) {
//     res.send('Hello Express');
// });

const staticPath = __dirname + '/public';
app.use(express.static(staticPath));
const absolutePath = __dirname + '/views/index.html';
app.get('/', function(req, res) {
    res.sendFile(absolutePath);
})





























 module.exports = app;
