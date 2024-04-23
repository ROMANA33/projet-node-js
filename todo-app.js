const express = require('express');
const {taches} = require('./database');

const app = express();
const PORT = 5000;

app.get('/' ,(req, res) =>{
  res.send("Bienvenu Fatou")
})

// Définir une route simple
app.get('/api/v1/todos', (req, res) => {
return res.json(taches);
});

// Démarrer le serveur

app.listen(PORT ,() => {
  console.log("server listening on port "+PORT)
});


//ajouter une tache

app.post('/todos', (req, res) => {
  const newTask = req.body;
  todos.push(newTask);
});



// Endpoint PUT pour modifier une tâche
app.put('/todos/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  res.json(todos[taskIndex]);
});

//afficher la liste de tous les taches
app.get('/todos', (req, res) => {
  res.json(todos);
});


//afficher les details de tous les taches
app.get('/todos/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  res.json(task);
});

//supprimer les taches
app.delete('/todos/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  res.status
});

//filtrer les taches
app.get('/todos', (req, res) => {
  res.json(filteredTasks);
});

//trier les taches
app.get('/todos/order', (req, res) => {
  res.json(sortedTasks);
});


// Endpoint pour toute autre API, retourner une erreur 404


app.listen(PORT ,() => {
  console.log("server listening on port "+PORT)
});