const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Datos en memoria
let tareas = [];

// Obtener todas las tareas
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// Crear una nueva tarea
app.post('/tareas', (req, res) => {
  const nuevaTarea = {
    id: Date.now(),
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    completada: req.body.completada || false,
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// Actualizar una tarea existente
app.put('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tareaIndex = tareas.findIndex((t) => t.id === id);

  if (tareaIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  tareas[tareaIndex] = { ...tareas[tareaIndex], ...req.body };
  res.json(tareas[tareaIndex]);
});

// Eliminar una tarea
app.delete('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tareaIndex = tareas.findIndex((t) => t.id === id);

  if (tareaIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  const tareaEliminada = tareas.splice(tareaIndex, 1);
  res.json(tareaEliminada[0]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
