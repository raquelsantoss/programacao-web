const express = require('express');
const app = express();
const calculadora = require('./util/calculadora');
const port = 8080;

// Rota para somar
app.get('/somar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).send('Valores inválidos');
  } else {
    const resultado = calculadora.somar(a, b);
    res.send(`A soma de ${a} e ${b} é igual a ${resultado}`);
  }
});

// Rota para subtrair
app.get('/subtrair/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).send('Valores inválidos');
  } else {
    const resultado = calculadora.subtrair(a, b); 
    res.send(`A subtração de ${a} e ${b} é igual a ${resultado}`);
  }
});

// Rota para multiplicar
app.get('/multiplicar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).send('Valores inválidos');
  } else {
    const resultado = calculadora.multiplicar(a, b); // Usando a função da calculadora
    res.send(`A multiplicação de ${a} e ${b} é igual a ${resultado}`);
  }
});

// Rota para dividir
app.get('/dividir/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).send('Valores inválidos');
  } else {
    const resultado = calculadora.dividir(a, b);
    res.send(`A divisão de ${a} por ${b} é igual a ${resultado}`);
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
