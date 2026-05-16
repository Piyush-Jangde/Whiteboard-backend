const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Hello Users');
});

router.post('/', (req,res)=>{
    res.send('Got a POST on Users');
});

//Export Router
module.exports = router;
