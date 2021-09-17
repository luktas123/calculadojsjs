import express from 'express'
var app = express ();

const PORT = process.env.PORT || 3000;

await app.use(express.static('public'));
app.listen (PORT);