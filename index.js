const express = require('express');
const cors = require('cors');
const app = express();
const serverRoutes = require('./routes');
const PORT = 8080;
const path = require('path');
const { urlencoded } = require('body-parser');

app.use(cors('*'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(urlencoded({ extended: true }));

serverRoutes(app);

const server = app.listen(PORT, () => {
  console.log(`Inicializado en el puerto ${PORT}`);
});

server.on('error', () => {
  console.log('error del servidor');
});
