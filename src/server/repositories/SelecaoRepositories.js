import connection from "../database/connection.js";
class SelecaoRepositeries {
  post(dataSelecoes) {
    const sql = `INSERT INTO selecoes SET ? `;

    //Retornando um promessa , ou seja, vms trabalhar com async e await
    return new Promise((resolve, reject) => {
      //Fazendo a conexão com banco de dados
      connection.query(sql, dataSelecoes, (error, result) => {
        //Se ocorrer erro na conexão, retorna um reject da promessa
        if (error) return reject("ERRO, CORRIJA URGENTE!!!!!!", error);
        //Se não ocorrer erro, os dados que vem do banco de dados são transformados em json e depois em objeto
        const data = JSON.parse(JSON.stringify(result));
        // e é retornado um resolve da variável acima
        return resolve(data);
      });
    });
  }

  get() {
    const sql = "SELECT * FROM selecoes";

    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject("ERRO, CORRIJA URGENTE!!!!!!", error);
        const data = JSON.parse(JSON.stringify(result));
        return resolve(data);
      });
    });
  }

  getById(id) {
    const sql = `SELECT * FROM selecoes WHERE id=${id}`;

    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        const line = result[0];
        if (error) return reject("ERRO, CORRIJA URGENTE!!!!!!", error);
        const data = JSON.parse(JSON.stringify(result));
        return resolve(data);
      });
    });
  }

  put(dataSelecoes, id) {
    const sql = `UPDATE selecoes SET ? WHERE id=${id} `;

    return new Promise((resolve, reject) => {
      connection.query(sql, dataSelecoes, (error, result) => {
        if (error) return reject("ERRO, CORRIJA URGENTE!!!!!!", error);
        const data = JSON.parse(JSON.stringify(result));
        return resolve(data);
      });
    });
  }

  delete(id) {
    const sql = `DELETE FROM selecoes WHERE id=${id}`;

    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject("ERRO, CORRIJA URGENTE!!!!!!", error);
        const data = JSON.parse(JSON.stringify(result));
        return resolve(data);
      });
    });
  }
}

export default new SelecaoRepositeries();
