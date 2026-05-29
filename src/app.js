import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import "dotenv/config";
import taskRoutes from './Routes/task.js';
import projectRoutes from './Routes/project.js';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
