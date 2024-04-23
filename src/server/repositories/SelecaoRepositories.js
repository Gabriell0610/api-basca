import { consult }  from "../database/connection.js"

class SelecaoRepositeries {
  post(dataSelecoes) {
    const sql = `INSERT INTO selecoes SET ? `;
    return consult(sql, dataSelecoes, 'Erro na criação')
  }

  get() {
    const sql = "SELECT * FROM selecoes";
    return consult(sql, '', 'Não foi possível encontrar')
  }

  getById(id) {
    const sql = `SELECT * FROM selecoes WHERE id=${id}`;
    return consult(sql, '', 'Não foi possível encontrar')
  }

  put(dataSelecoes, id) {
    const sql = `UPDATE selecoes SET ? WHERE id=${id} `;
    return consult(sql, dataSelecoes, 'Não foi possíel atualizar')
  }

  delete(id) {
    const sql = `DELETE FROM selecoes WHERE id=${id}`;
    return consult(sql, '', 'Não fpo possível deletar')
  }
}

export default new SelecaoRepositeries();
