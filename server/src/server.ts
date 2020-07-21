import express from 'express';

const app = express();

app.get('/users',(request,response) => {
  console.log('Listagem de usuários');

  response.json([
    'Diego',
    'Alexsander',
    'Fernando',
    'Leonardo']);
});

app.listen(3322);
