import express from "express";
import cors from "cors";
import ahorcadoRouter from "./routes/ahorcado.routes";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(cors());

app.use("/api/ahorcado", ahorcadoRouter);

app.use((_, res) => {
  res.status(404).send({ message: "Ruta no encontrada" });
});

export const viteNodeApp = app;
