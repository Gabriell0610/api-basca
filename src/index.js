import { server } from "./server/server.js";
const port = 3333;

server.listen(port, () => {
  console.log(`APP rodando no http://localhost:${port}`);
});
