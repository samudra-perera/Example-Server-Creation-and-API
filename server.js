const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage': {
        'birthName': '21 Savage',
        'age': 29,
        'birthLocation': 'The trenches'
    },
    'chance the rapper': {
        'birthName': 'Chancery Lane',
        'age': 28,
        'birthLocation': 'The Chi'
    }, 
    'unkown': {
        'birthName': 'unkown',
        'age': 0,
        'birthLocation': '??????'
    },
    'dylan': {
        'birthName': 'dylan',
        'age': 69,
        'birthLocation': 'dylan dylan'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    
    if(rappers[rapperName]) {
        res.json(rappers[rapperName]);
    } else {
        res.json(rappers['dylan'])
    }
})

app.listen(PORT , (req, res) => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})