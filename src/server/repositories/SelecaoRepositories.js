import connection from "../database/connection.js";

class SelecaoRepositeries { 
    get() {
        const sql = "SELECT * FROM selecoes";
        
        //Retornando um promessa , ou seja, vms trabalhar com async e await
        return new Promise((resolve, reject ) => {
            //Fazendo a conexão com banco de dados
            connection.query(sql, (error, result) => {
                //Se ocorrer erro na conexão, retorna um reject da promessa
                if(error) return reject('ERRO, CORRIJA URGENTE!!!!!!',error)

                //Se não ocorrer erro, os dados que vem do banco de dados são trasnformados em json e depois em objeto
                const data = JSON.parse(JSON.stringify(result))
                // e é retornado um resolve da variável acima
                return resolve(data)
                
            })
        })
    }

    getById(id){
        const sql = `SELECT * FROM selecoes WHERE id=${id}`;

        return new Promise((resolve, reject) => {
            connection.query(sql, (error, result) => {
                const line = result[0];

                if(error) return reject("ERRO, CORRIJA URGENTE!!!!!!", error)

                const data = JSON.parse(JSON.stringify(result))

                return resolve(data)
            });
        })

        
    }
}



export default new SelecaoRepositeries