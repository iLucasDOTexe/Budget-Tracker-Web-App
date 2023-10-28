const express = require('express');

const  app = express();

app.use(express.static('/home/lucaspi/Project-Balance/Frontend'));

app.use((req, res) => {
    res.status(404);
    res.send('<h1>Congratulations. You searched for a side, which does not exist (404)</h1>');
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
})