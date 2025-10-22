const express = require('express');
let mysql = require('mysql2');
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('Example app listening on port 3001!');
});

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: "3309",
  password: "MieAyam678",
  database: "Mahasiswa",
});
