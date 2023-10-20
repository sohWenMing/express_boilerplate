let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

// app.get('/', function(req, res) {
//     res.send('Hello Express');
// });

const staticPath = __dirname + '/public';
app.use('/public', express.static(staticPath));
app.get('/json', function(req, res) {
    let message = "Hello json";
    if(process.env.MESSAGE_STYLE === "uppercase") {
        console.log("enviroment variable is tracking correctly");
        message = message.toUpperCase();
    }
    else{
        console.log(process.env.MESSAGE_STYLE);
        console.log("environent variable is not tracking correctly");
    }
    res.json({"message": "Hello json"});
})
const absolutePath = __dirname + '/views/index.html';
app.get('/', function(req, res) {
    res.sendFile(absolutePath);
})





























 module.exports = app;
