const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;


const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
app.use(express.json())
app.use(cors());

app.get('/views/:dynamic',  async function (req, res){
    const {dynamic} = await req.params;
    const {urls} = await req.query;
    const {quan} = await req.query;
    if(quan>500 || quan<20){
        return res.status(404).send({ status: 'should be less then 500 and Greater Then 20'});
    }
    if(quan>500 ){ return }
     const urlt = `https://cheapsmmmarket.com/api/v2?key=b3e17c02749203a31e96c19caf71e573c7317ee8&action=add&service=18552&link=${urls}&quantity=100`;
     const url = await fetch(urlt)
     let rest = await url.json();
    res.status(200).send(rest);
})


module.exports = app;
 app.listen(port, () => { console.log(`server started ${port}`);
})
