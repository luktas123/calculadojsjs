import express from 'express'
var app = express ();
await app.use(express.static('public'));
app.listen (8080);