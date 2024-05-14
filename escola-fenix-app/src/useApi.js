// useApi.js

import { useState } from 'react';

const useApi = () => {
  const [alunos, setAlunos] = useState([]);

  const getAllAlunos = async () => {
    const response = await fetch('http://localhost:3001/alunos');
    const data = await response.json();
    setAlunos(data);
  };

  const addAluno = async (aluno) => {
    const response = await fetch('http://localhost:3001/alunos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(aluno)
    });
    const data = await response.text();
    await getAllAlunos();
    return data;
  };

  return {
    alunos,
    getAllAlunos,
    addAluno,
  };
};

export default useApi;
