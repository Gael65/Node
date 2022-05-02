const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        message: 'gael65'
    })
    console.log('gael65');
})


app.listen(8080,'0.0.0.0', () => {
    console.log(`Hola gael65`);
})