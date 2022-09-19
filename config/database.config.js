const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../app/assets/database/database.db', sqlite3.OPEN_READONLY,  (err) => {
    if(err) {
        console.error('Erro ao conectar o banco de dados!');
    } 
    console.log('Banco de dados conectado com sucesso');
});

module.exports = db;