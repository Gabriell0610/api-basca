import { Router } from "express";
import SelecaoController from "../controllers/SelecaoController.js";

const router = Router();

//get da tabela selecoes e eviando para a rota selecoes
router.get("/selecoes", SelecaoController.getData);

//get por id da tabela selecaos e enviando para a rota selecoes
router.get("/selecoes/:id", SelecaoController.getByIdData);

//criando dados na tabela selecoes e enviando para a rota selecoes
router.post("/selecoes", SelecaoController.postData);

//editando conteudo da tabela selecoes pelo id e enviando para a rota selecoes
router.put("/selecoes/:id", SelecaoController.putData);

//deletando conteudo da tabela selecoes pelo id e enviando para a rota selecoes
router.delete("/selecoes/:id", SelecaoController.deleteData);

export { router };
