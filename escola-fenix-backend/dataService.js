const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, './escola-fenix.db');
const db = new sqlite3.Database(dbPath);

function getAllAlunos(callback) {
  db.all('SELECT * FROM alunos', (err, rows) => {
    if (err) {
      console.error(err);
      return callback(err, null);
    }
    callback(null, rows);
  });
}

function addAluno(aluno, callback) {
  db.run('INSERT INTO alunos (nome, turma, totalFaltas) VALUES (?, ?, ?)',
    [aluno.nome, aluno.turma, aluno.totalFaltas], (err) => {
      if (err) {
        console.error(err);
        return callback(err);
      }
      callback(null);
    });
}

function updateAluno(id, aluno, callback) {
  db.run('UPDATE alunos SET nome = ?, turma = ?, totalFaltas = ? WHERE id = ?',
    [aluno.nome, aluno.turma, aluno.totalFaltas, id], (err) => {
      if (err) {
        console.error(err);
        return callback(err);
      }
      callback(null);
    });
}

function removeAluno(id, callback) {
  db.run('DELETE FROM alunos WHERE id = ?', id, (err) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null);
  });
}

module.exports = {
  getAllAlunos,
  addAluno,
  updateAluno,
  removeAluno
};
