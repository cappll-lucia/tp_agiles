import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ahorcadoRouter from "./routes/ahorcado.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: `${process.env.VITE_FE_URL}`,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.options("*", cors());

app.use(cookieParser(process.env.SECRET_KEY || "secret-key"));

app.use("/api/ahorcado", ahorcadoRouter);

app.use((_, res) => {
  res.status(404).send({ message: "Ruta no encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export const viteNodeApp = app;
