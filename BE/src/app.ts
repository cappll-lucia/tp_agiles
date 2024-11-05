import express from 'express';
import cors from 'cors';
import ahorcadoRouter from './routes/ahorcado.routes';


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/ahorcado', ahorcadoRouter);

app.use((_, res) => {
  res.status(404).send({ message: 'Ruta no encontrada' });
});

export const viteNodeApp = app;