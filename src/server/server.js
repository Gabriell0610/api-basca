import express from "express";

const server = express();

//Indicar para o express ler o body com json
server.use(express.json());

// mock
const dataSelecoes = [
  { id: 1, name: "Brasil", titulos: "5" },
  { id: 2, name: "Itália", titulos: "4" },
  { id: 3, name: "França", titulos: "3" },
];

function searchById(id) {
  return dataSelecoes.filter((selecao) => selecao.id == id);
}

//Pegandoo index da seleção através do id
function searchIndexSelecao(id) {
  return dataSelecoes.findIndex((selecao) => selecao.id == id);
}

//get na rota padrão
server.get("/", (req, res) => {
  return res.send("Olá mundo");
});

//get na rota selecoes
server.get("/selecoes", (req, res) => {
  res.send(dataSelecoes);
});

//get na rota selecoes e pegando um dado pelo paramatro id e mostrando para o usuário em json
server.get("/selecoes/:id", (req, res) => {
  res.json(searchById(req.params.id));
});

//post na rota de selecoes - adicionando um dado
server.post("/selecoes", (req, res) => {
  dataSelecoes.push(req.body);
  res.status(201).send("Seleção cadastrada com sucesso");
});

server.delete("/selecoes/:id", (req, res) => {
  let index = searchIndexSelecao(req.params.id);
  dataSelecoes.splice(index, 1);
  res.send("item deletado");
});

server.put("/selecoes/:id", (req, res) => {
  let index = searchIndexSelecao(req.params.id);
  dataSelecoes[index].name = req.body.name;
  dataSelecoes[index].titulos = req.body.titulos;

  res.json(dataSelecoes);
});

export { server };
