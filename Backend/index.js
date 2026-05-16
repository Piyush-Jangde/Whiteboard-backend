
const express = require('express');
const app=express();
const userRoutes= require('./routes/userRoutes');
const postRoutes=require('./routes/postRoutes');

app.use('/users',userRoutes);
app.use('/posts',postRoutes);


app.listen(3030, ()=>{
    console.log('Server is running on http://localhost:3030');
});
