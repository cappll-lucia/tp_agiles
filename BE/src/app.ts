import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ahorcadoRouter from "./routes/ahorcado.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const allowed = process.env.VITE_FE_URL
console.log('---> ', allowed)

app.use(
  cors({
    origin: process.env.VITE_FE_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

/* */

app.options("*", cors());

app.use(cookieParser(process.env.SECRET_KEY || "secret-key"));

app.use("/api/ahorcado", ahorcadoRouter);

app.use((_, res) => {
  res.status(404).send({ message: "Ruta no encontrada" });
});


export const viteNodeApp = app;
