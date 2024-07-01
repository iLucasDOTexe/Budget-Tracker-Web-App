const express = require('express');
const app = express();
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./projectBalance.db',sqlite.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err);
})

app.use(express.static('C:\\Users\\Lucas\\Documents\\GitHub\\Project-Balance\\Frontend\\'));
app.use(express.json())

app.listen(4444, 'localhost', () => {
    console.log("App listening on port 4444");
})

//ROUTES
//Receiving a new transaction and saving it into the database
app.post('/v1/newTransaction', (req, res) => {
    const {transactionType, category, name, value, date, taxational_relevant} = req.body;
   
    if(transactionType == 'Einnahme'){
        sql = "INSERT INTO income(category,name,value,date,taxational_relevant) VALUES (?,?,?,?,?)"
    }else{
        sql = "INSERT INTO spendings(category,name,value,date,taxational_relevant) VALUES (?,?,?,?,?)"
    }
    db.run(sql,[category, name, value, date, taxational_relevant], (err)=>{
        if (err) return res.json({status: 500, success: false, error: err});
        console.log("successful input ", category, name, value, date, taxational_relevant);
    })

    res.send({
        status: '200 - Transaction saved!',
        body: {category, name, value, date, taxational_relevant}
    });
    
    //Errorhandling, if received body is not complete
    if(!category || !name || !value || !date || !taxational_relevant){
        res.status(418).send({message: 'Transaction not complete!'})
    }
    
});

//Custom 404 page
app.use((req, res) => {
    res.status(404);
    res.send('<h1>Congratulations. You searched for a side, which does not exist (404)</h1>');
});
