const express = require('express');
const app = express();
 
console.log("sidddd");

app.listen(4500, console.log(`Server started on port 4500`));

app.get('/', (req, res) => {
    res.send('Vercel Deployment Done...')
    res.end()
})    

app.get('/name', (req, res) => {
    res.send('sid...')
    res.end()
})    
