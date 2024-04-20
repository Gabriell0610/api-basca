import { Router } from "express";
import SelecaoController from "../controllers/SelecaoController.js";

const router = Router();

//get da tabela selecoes e eviando para a rota selecoes
router.get("/selecoes", SelecaoController.get);

//get por id da tabela selecaos e enviando para a rota selecoes
router.get("/selecoes/:id", SelecaoController.getById);

//criando dados na tabela selecoes e enviando para a rota selecoes
router.post("/selecoes", SelecaoController.post);

//editando conteudo da tabela selecoes pelo id e enviando para a rota selecoes
router.put("/selecoes/:id", SelecaoController.put);

//deletando conteudo da tabela selecoes pelo id e enviando para a rota selecoes
router.delete("/selecoes/:id", SelecaoController.delete);

export { router };
