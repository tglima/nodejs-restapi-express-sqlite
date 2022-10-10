const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const homeRoutes = require('./app/routes/home.routes');
const authRoutes = require('./app/routes/auth.routes');
const customerRoutes = require('./app/routes/customer.routes');
const contactRoutes = require('./app/routes/contact.routes');
const appConfig = require('./app/config/app.config');

app.use(bodyParser.json());

app.use(`/api/v${appConfig.api.nuVersion}`, homeRoutes);
app.use(`/api/v${appConfig.api.nuVersion}`, authRoutes);
app.use(`/api/v${appConfig.api.nuVersion}`, customerRoutes);
app.use(`/api/v${appConfig.api.nuVersion}`, contactRoutes);

app.listen(`${appConfig.server.port}`, () => {
    console.log(`Servidor rodando na porta: ${appConfig.server.port}`);
});
