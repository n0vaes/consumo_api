const cors = require('cors');
const axios = require('axios');
const express = require('express');
const app = express();

// criando e servindo a API, habilitando cors

app.use(cors());

app.get('/', async(req, res) => {
  try {
    // desestruturando response e usando o response.data
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    
    return res.json(data)

  } catch (error) {
    console.error(error);
  }
});

app.listen('4567');