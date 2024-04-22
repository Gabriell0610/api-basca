import connection from "../database/connection.js";
import SelecaoRepositories from "../repositories/SelecaoRepositories.js";

class selecaoController {
  async getData(req, res) {
    const data = await SelecaoRepositories.get()
    res.json(data)
  }

  async getByIdData(req, res) {
    const id = req.params.id
    const data = await SelecaoRepositories.getById(id)
    res.json(data)
  }

  postData(req, res) {
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

  putData(req, res) {
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

  deleteData(req, res) {
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
