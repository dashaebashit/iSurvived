const express = require('express');
const app = express();
const events = require('./routes/events');

app.use('/api/events', events);

app.get('/api', (req, res) => {
    res.send('hello');
});
app.listen(1234);