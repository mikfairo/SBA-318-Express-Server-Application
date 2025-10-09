const express = require("express");
const app = express();


app.use( express.json()); //middleware

app.listen(3000, () => {
    console.log('Its working!');
})