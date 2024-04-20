import connection from "../database/connection.js";

class selecaoController {
  get(req, res) {
    const sql = "SELECT * FROM selecoes";

    connection.query(sql, (error, result) => {
      if (error) {
        res.status(404).json({ erro: error });
      } else {
        res.status(200).json(result);
      }
    });
  }

  getById(req, res) {
    const id = req.params.id;
    const sql = `SELECT * FROM selecoes WHERE id=${id}`;

    connection.query(sql, (error, result) => {
      const line = result[0];
      if (error) {
        res.status(404).json({ erro: error });
      } else {
        res.status(200).json(line);
      }
    });
  }

  post(req, res) {
    const dataSelecoes = req.body;
    const sql = `INSERT INTO selecoes SET ? `;

    connection.query(sql, dataSelecoes, (error, result) => {
      if (error) {
        res.status(400).json({ erro: error });
      } else {
        res.status(201).json(result);
      }
    });
  }

  put(req, res) {
    const dataSelecoes = req.body;
    const id = req.params.id;
    const sql = `UPDATE selecoes SET ? WHERE id=${id} `;

    connection.query(sql, dataSelecoes, (error, result) => {
      if (error) {
        res.status(400).json({ erro: error });
      } else {
        res.status(201).json(result);
      }
    });
  }

  delete(req, res) {
    const id = req.params.id;
    const sql = `DELETE FROM selecoes WHERE id=${id}`;

    connection.query(sql, (error, result) => {
      if (error) {
        res.status(404).json({ erro: error });
      } else {
        res.status(200).json(result);
      }
    });
  }
}

export default new selecaoController();
