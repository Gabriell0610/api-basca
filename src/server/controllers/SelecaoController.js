import SelecaoRepositories from "../repositories/SelecaoRepositories.js";

class selecaoController {
  //Criarndo dados
  async postData(req, res) {
    const dataSelecoes = req.body;
    const data = await SelecaoRepositories.post(dataSelecoes);
    res.json(data);
  }

  //Pegando dados
  async getData(req, res) {
    const data = await SelecaoRepositories.get();
    res.json(data);
  }

  //Pegando dados por id
  async getByIdData(req, res) {
    const id = req.params.id;
    const data = await SelecaoRepositories.getById(id);
    res.json(data);
  }

  //Editando dados
  async putData(req, res) {
    const dataSelecoes = req.body;
    const id = req.params.id;
    const data = await SelecaoRepositories.put(dataSelecoes, id);
    res.json(data);
  }

  //Deletando dados
  async deleteData(req, res) {
    const id = req.params.id;
    const data = await SelecaoRepositories.delete(id);
    res.json(data);
  }
}

export default new selecaoController();
