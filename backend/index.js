const express = require('express');
const app = express();
const rootRouter = require('./routes/index.js');
app.use('/api/v1', rootRouter);
app.listen(3000, ()=>{
    console.log(`Server is running on port 3000 at ${new Date().toLocaleString()}`)
})

