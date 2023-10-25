const studentService = require('../services/studentService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let students = await studentService.buscarTodos();

        for(let i in students){
            json.result.push({
                codigo: students[i].codigo,
                ID: students[i].ID,
                Nome: students[i].Nome,
                Idade: students[i].Idade,
                NotaPrimeiroSemestre: students[i].NotaPrimeiroSemestre,
                NotaSegundoSemestre: students[i].NotaSegundoSemestre,
                Professor: students[i].Professor,
                Sala: students[i].Sala

            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) =>{
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let student = await studentService.buscarUm(codigo);

        if(student){
            json.result = student;
        }

        res.json(json);
    },

    inserirUm: async(req, res) =>{
        let json = {error:'', result:{}};

        let ID = req.body.ID;
        let Nome = req.body.Nome;
        let Idade = req.body.Idade;
        let NotaPrimeiroSemestre = req.body.NotaPrimeiroSemestre;
        let NotaSegundoSemestre = req.body.NotaSegundoSemestre;
        let Professor = req.body.Professor;
        let Sala = req.body.Sala;


        if(ID && Nome && Idade && NotaPrimeiroSemestre && NotaSegundoSemestre && Professor && Sala){
            let studentCodigo = await studentService.inserirUm(ID, Nome, Idade, NotaPrimeiroSemestre, NotaSegundoSemestre, Professor, Sala);
            json.result = {
                codigo: studentCodigo,
                ID,
                Nome,
                Idade,
                NotaPrimeiroSemestre,
                NotaSegundoSemestre,
                Professor,
                Sala
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async(req, res) =>{
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let ID = req.body.ID;
        let Nome = req.body.Nome;
        let Idade = req.body.Idade;
        let NotaPrimeiroSemestre = req.body.NotaPrimeiroSemestre;
        let NotaSegundoSemestre = req.body.NotaSegundoSemestre;
        let Professor = req.body.Professor;
        let Sala = req.body.Sala;


        if(codigo && ID && Nome && Idade && NotaPrimeiroSemestre && NotaSegundoSemestre && Professor && Sala){
            await studentService.alterar(codigo, ID, Nome, Idade, NotaPrimeiroSemestre, NotaSegundoSemestre, Professor, Sala);
            json.result = {
                codigo,
                ID,
                Nome,
                Idade,
                NotaPrimeiroSemestre,
                NotaSegundoSemestre,
                Professor,
                Sala
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await studentService.excluir(req.params.codigo);

        res.json(json);
    }
}