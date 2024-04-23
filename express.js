//endpoints
    
    //ajouter une tache
    
    app.post('/todos', (req, res) => {
    const newTask = req.body;
    todos.push(newTask);
    });
    
    
    // Endpoint PUT pour modifier une tâche
    app.put('/todos/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    res.json(todos[taskIndex]);
    })
    
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
    app.all('*', (req, res) => {
    res.status(404).json
    });