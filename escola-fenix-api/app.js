const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const dataService = require('../escola-fenix-backend/dataService.js');

app.use(cors());
app.use(express.json());

app.get('/alunos', (req, res) => {
  dataService.getAllAlunos((err, alunos) => {
    if (err) {
      return res.status(500).send('Erro ao buscar alunos');
    }
    res.json(alunos);
  });
});

app.post('/alunos', (req, res) => {
  const aluno = req.body;
  dataService.addAluno(aluno, (err) => {
    if (err) {
      return res.status(500).send('Erro ao adicionar aluno');
    }
    res.send('Aluno adicionado');
  });
});

app.put('/alunos/:id', (req, res) => {
  const id = req.params.id;
  const aluno = req.body;
  dataService.updateAluno(id, aluno, (err) => {
    if (err) {
      return res.status(500).send('Erro ao atualizar aluno');
    }
    res.send('Aluno atualizado');
  });
});

app.delete('/alunos/:id', (req, res) => {
  const id = req.params.id;
  dataService.removeAluno(id, (err) => {
    if (err) {
      return res.status(500).send('Erro ao remover aluno');
    }
    res.send('Aluno removido');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
