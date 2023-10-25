const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const port = 3000;


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Middleware para lidar com dados de formulário
app.use(express.urlencoded({ extended: false }));

// Rotas
const calculadoraRoutes = require('./routes');
app.use('/', calculadoraRoutes);

app.listen(port, () => {
  console.log(`Aplicativo de Calculadora está rodando em http://localhost:${port}`);
});
