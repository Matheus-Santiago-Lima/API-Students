const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promisse((aceito, rejeitado)=>{

            db.query('SELECT * FROM students', (error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    
    buscarUm: (codigo) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM students WHERE codigo = ?', [codigo], (error,results)=>{
                if(error) {rejeitado(error); return}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (ID, Nome, Idade, NotaPrimeiroSemestre, NotaSegundoSemestre, Professor, Sala) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO students (ID, Nome, Idade, NotaPrimeiroSemestre, NotaSegundoSemestre, Professor, Sala) VALUES (?,?,?,?,?,?,?)', 
                [ID, Nome, Idade, NotaPrimeiroSemestre, NotaSegundoSemestre, Professor, Sala], 
                (error,results)=>{
                    if(error) {rejeitado(error); return}
                    aceito(results.insertCodigo);
                }
            );
        });
    },

    
    alterar: (codigo, ID, Nome, Idade, NotaPrimeiroSemestre, NotaSegundoSemestre, Professor, Sala) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE students SET ID = ?, Nome = ?, Idade = ?, NotaPrimeiroSemestre = ?, NotaSegundoSemestre = ?, Professor = ?, Sala = ? WHERE codigo = ?', 
                [ID, Nome, Idade, NotaPrimeiroSemestre, NotaSegundoSemestre, Professor, Sala, codigo], 
                (error,results)=>{
                    if(error) {rejeitado(error); return}
                    aceito(results);
                }
            );
        });
    },

    excluir: (codigo) =>{
        return new Promisse((aceito, rejeitado)=>{

            db.query('DELETE FROM students WHERE codigo = ?', [codigo], (error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
            });
        });
    },
};
