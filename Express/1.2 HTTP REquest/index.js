import express from "express";
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Hello Boys!");
})

app.get('/about', (req, res) => {
    res.send("Hello Boys! Lets talk about our Next Tour");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})