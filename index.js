import express from "express";
import fs from "fs/promises";


const app = express();


app.get('/', async (request, response) => {
  const fileBuf = await fs.readFile('./index.html');
  response.type('html');
  response.send(fileBuf);
})

app.get('*.css', async (request, response) => {
  const fileBuf = await fs.readFile('./main.css');
  response.type('css');
  response.send(fileBuf)
})

app.listen(5080);