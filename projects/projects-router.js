const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projs => {
        res.status(200).json({ data: projs })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects'});
    });
});

router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.status(200).json({ data: resources })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resources'});
    });
});

router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(tasks => {
        res.status(200).json({ data: tasks })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks'});
    });
});

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
    .then(proj => {
        res.status(201).json({ data: proj })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to add project'});
    });
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;

    Projects.addResource(resourceData)
    .then(resource => {
        res.status(201).json({ data: resource })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to add resource'});
    });
});

router.post('/tasks', (req, res) => {
    const taskData = req.body;

    Projects.addTask(taskData)
    .then(task => {
        res.status(201).json({ data: task })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to add task'});
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.removeProject(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete project' });
    });
  });


module.exports = router;