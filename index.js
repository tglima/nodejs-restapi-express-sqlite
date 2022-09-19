const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const homeRoutes = require('./app/routes/home.routes');

app.use(bodyParser.json());

app.use('/api/v1', homeRoutes);

app.listen(4200, () => {
    console.log('Servidor rodando na porta: 4200');
  });