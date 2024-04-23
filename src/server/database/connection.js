import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1006",
  database: "dbcopa",
});

connection.connect();

export const consult = (sql, values='', mensageReject) =>  {
  //Retornando um promessa , ou seja, vms trabalhar com async e await
  return new Promise((resolve, reject) => {
    //Fazendo a conexão com banco de dados
    connection.query(sql, values, (error, result) => {
      //Se ocorrer erro na conexão, retorna um reject da promessa
      if (error) return reject(mensageReject);
      //Se não ocorrer erro, os dados que vem do banco de dados são transformados em json e depois em objeto
      const data = JSON.parse(JSON.stringify(result));
      // e é retornado um resolve da variável acima
      return resolve(data);
    });
  });
}

export default connection;
