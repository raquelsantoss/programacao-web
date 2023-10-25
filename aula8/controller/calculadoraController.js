const mustache = require('mustache');
const fs = require('fs');

exports.getCalculadora = (req, res) => {
  const view = fs.readFileSync('views/index.html', 'utf-8');
  const html = mustache.render(view, { resultado: undefined });
  res.send(html);
};

exports.calcular = (req, res) => {
  const { numA, numB, operacao } = req.body;
  let resultado;

  switch (operacao) {
    case '+':
      resultado = Number(numA) + Number(numB);
      break;
    case '-':
      resultado = Number(numA) - Number(numB);
      break;
    case '*':
      resultado = Number(numA) * Number(numB);
      break;
    case '/':
      resultado = Number(numA) / Number(numB);
      break;
    default:
      resultado = 'Operação inválida';
  }

  const view = fs.readFileSync('views/index.html', 'utf-8');
  const html = mustache.render(view, { resultado });
  res.send(html);
};
