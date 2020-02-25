const express = require ('express')
const bodyParser = require('body-parser')
const app = express();
app.use = (bodyParser.json());
app.use = (bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.send({status: 'ok'})
})



app.listen(5000, ()=>{
    console.log('Server rodando na porta 5000')
})