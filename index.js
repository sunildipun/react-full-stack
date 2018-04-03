const express = require('express');
var port = 5000;

const app = express();

app.get('/',(req, res) =>{
    res.send({hi:'there'});
});

app.listen(port, () => {
    console.log('Listeing on port '+ port);
});