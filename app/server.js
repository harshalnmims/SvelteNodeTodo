const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000,() => {
    console.log('Server is running on port 5000');
})