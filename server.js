import Express from "express"

const app = new Express();

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: '/Users/morrow/documents/google_Drive/code/JS/JS 30/Drum Kit'})
});

app.listen(3000, () => {
    console.log('App started')
});