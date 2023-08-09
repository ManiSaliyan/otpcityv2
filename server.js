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
    if(quan > 500){
        return res.status(404).send({ status: 'should be less then 500'});
    }
    if(quan>500 ){ return }
     const urlt = `https://smmworldpanel.com/api/v2?key=3098c8f54ecbaaa31416e3375bacc3e6&action=add&service=3711&link=${urls}&quantity=${quan}`;
     const url = await fetch(urlt)
     let rest = await url.json();
    res.status(200).send(rest);
})


module.exports = app;
 app.listen(port, () => { console.log(`server started ${port}`);
})