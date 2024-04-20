import express from "express";
import { router } from "./routes/index.js";

const server = express();

//Indicar para o express ler o body com json
server.use(express.json());

server.use(router);

export { server };
