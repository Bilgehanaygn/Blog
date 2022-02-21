const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const articleRoutes = require('./routes/articles.js');
var myJson = require('./data/myData.json');

const app = express();

app.use(bodyParser.json({limit:"20mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));
app.use(cors());


app.get('/', (req,res)=>{
    res.send('All fine.');
});

app.use("/articles", articleRoutes);

app.listen(3001,()=>{console.log('Listening on PORT 3001')});
