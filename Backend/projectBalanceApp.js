const express = require('express');

const app = express();

app.use(express.static('/home/lucaspi/Project-Balance/Frontend'));

app.use((req, res) => {
    res.status(404);
    res.send('<h1>Congratulations. You searched for a side, which does not exist (404)</h1>');
});

app.get('/testapi', (req, res) => {
    res.status(200).send({
        status: '200 - Das hat geklappt!'
    });
});

app.listen(4444, '192.168.178.60', () => {
    console.log("App listening on port 4444");
})