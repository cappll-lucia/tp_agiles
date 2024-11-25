import express from "express";
import cors from "cors";
import ahorcadoRouter from "./routes/ahorcado.routes";
import session from "express-session";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, 
        secure: false,
        sameSite: "lax", 
    },
  })
);
app.use(express.json());

app.use(cors({
    origin: `${process.env.VITE_FE_URL}`,
    credentials: true, 
}));

app.use("/api/ahorcado", ahorcadoRouter);

app.use((_, res) => {
  res.status(404).send({ message: "Ruta no encontrada" });
});

export const viteNodeApp = app;
