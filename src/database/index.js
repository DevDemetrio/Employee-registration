const {Client}  = require('pg');

const client =  new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'myemployee'
})

client.connect();

// CREATE TABLE myemployee (
    // id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    // nome VARCHAR(100) NOT NULL,
    // cpf VARCHAR(11) NOT NULL,
    // rg VARCHAR(10) NOT NULL,
    // endereco VARCHAR(100) NOT NULL,
// );