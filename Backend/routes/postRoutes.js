const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Hello Posts');
});

router.post('/', (req,res)=>{
    res.send('Got a POST on Posts');
});

//Export Router
module.exports = router;
