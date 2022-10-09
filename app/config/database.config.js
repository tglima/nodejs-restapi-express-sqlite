const sqlite3 = require('sqlite3').verbose();
const dbPath = (process.cwd()+'/app/assets/database/database.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if(err) {
        console.error(err);
        console.error('Erro ao conectar o banco de dados!');
        return;
    }
    console.log('Banco de dados conectado com sucesso');
});

module.exports = db;
