const { Client } = require('pg');
const client = new Client({
    user: 'dev',
    host: 'localhost',
    database: 'chat',
    password: '1234',
    port: 5432,
  })

  client.connect()

  var usuairo = '';

  client.query('SELECT * FROM PUBLIC.USUARIO where usuario.id = 1', (err, res) => {
    usuario = res.rows
    client.end()
  })
