
const express     = require('express');
const router      = express.Router();
const path 		  = require('path');


var app = express();



router.get('/', function(req, res) {
    //res.setHeader('Content-Type', 'text/plain');
    console.log("quelq'un s'est connecté");
    res.sendFile(path.join(__dirname+('/Accueil.html')));
       
});

router.post('/contact', (req, res) => {
 
})

app.use(express.static(__dirname + ''));
app.use('/',router);
app.listen(2607);
 
