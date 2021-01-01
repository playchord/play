const express = require('express')

const app = express();

app.listen(5000, () => {
    console.log('App started')
});

app.use(express.static('dist'));

const link = './'

app.get('/', (req, res) => {
    res.sendFile('./dist/index.html', {root: link})
});

app.get('/drum', (req, res) => {
    console.log('drum opened')
    res.sendFile('./dist/index2.html', {root: link})
});

app.get('/test', (req, res) => {
    console.log('test opened')
    res.sendFile('./dist/index_test.html', {root: link})
});

app.get('/preset', (req, res) => {
    console.log('preset')
    res.sendFile('./dist/preset.json', {root: link})
});