let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

// app.get('/', function(req, res) {
//     res.send('Hello Express');
// });

const staticPath = __dirname + '/public';
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})
app.use('/public', express.static(staticPath));
app.get('/json', function(req, res) {
    let message = "Hello json";
    if(process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
    }
    else{
        console.log(process.env.MESSAGE_STYLE);
        console.log("environent variable is not tracking correctly");
    }
    res.json({"message": message});
        
})
const absolutePath = __dirname + '/views/index.html';
app.get('/', function(req, res) {
    res.sendFile(absolutePath);
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next()
}, (req, res) => {
    res.json({time: req.time});
});

app.get('/:word/echo', (req, res) => {
    res.json({"echo": req.params.word});
})
app.route('/name').get(
    (req, res) => {
        const nameString = req.query.first + " " + req.query.last;
        res.json({
            name: nameString
        })

}).post((req, res) => {
    console.log("this was a post");
})





























 module.exports = app;
