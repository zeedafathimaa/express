const { query } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/json', (req, res) => {
    const queryParams = req.query;
    const pathParams = req.path;
    res.send({
        "Query": queryParams,
        "Path": pathParams,
    })
})

const obj ={data:[{name:"zida",
        gender:"Female" },
    {name:"Karan",
        gender:"Male"},
    {name:"Diya",
        gender:"Female"}
]}

app.post('/users', (req, res) => {
    res.json(obj.data);
    })

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}!`);
})