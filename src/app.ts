import { resolve } from "path";
import dotenv from "dotenv";
dotenv.config({ path: resolve(__dirname, "../.env") });
// function call dotenv variables

import express from "express";
import cors from "cors";
import router from "./routes/index.Routes";
import corsOptions from "./config/corsOptions";
import db from "./config/mongo";
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
db();

// # Maanipulando Rutas;
app.use("/", router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Hola!😄 servidor activo en http://localhost:${PORT}`);
});
