const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/dados', (req, res) => {
    try {
        const { nome, endereco, telefone, data } = req.body;

        if (!nome || !endereco || !telefone || !data) {
            throw new Error('Todos os campos são obrigatórios.');
        }

        const templatePath = path.join(__dirname, 'views/dados.html');
        const templateContent = fs.readFileSync(templatePath, 'utf8');

        const html = templateContent
            .replace('{{nome}}', nome)
            .replace('{{endereco}}', endereco)
            .replace('{{telefone}}', telefone)
            .replace('{{data}}', data);

        res.send(html);
    } catch (error) {
        console.error(error);
        res.status(400).send('Erro ao processar o formulário.');
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
