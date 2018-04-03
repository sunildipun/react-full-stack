const express = require('express');
var PORT = proess.env.PORT || 5000;

const app = express();

app.get('/',(req, res) =>{
    res.send({hi:'there'});
});

app.listen(PORT, () => {
    console.log('Listeing on port '+ PORT);
});