const express = require('express');
const helmet = require('helmet');

const Projects = require('../data/projects-model.js');
const Actions = require('../data/actions-model.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: "Hello"})
});

server.get('/api/projects', async (req, res) => {
    try {
        const projects = await Projects.getProjects();
        res.status(200).json(projects)
    } catch(error){
        res.status(500).json({ message: "Error retrieving projects"})
    }
});

server.get('/api/projects/:id', async (req, res) => {
    try {
        const project = await Projects.getProjectById(req.params.id);
        res.status(200).json(project)
    } catch(error) {
        res.status(500).json({ message: "Error retrieving that project"})
    }
});

server.post('/api/projects', async (req, res) => {
    try {
        const newProject = await Projects.addProject(req.body);
        res.status(201).json(newProject);
    } catch(error) {
        res.status(500).json(error)
    }
})

server.get('/api/actions', async (req, res) => {
    try {
        const actions = await Actions.getActions();
        res.status(200).json(actions);
    } catch(error) {
        res.status(500).json({ message: "Error retriving actions"})
    }

});

server.post('/api/actions', async (req, res) => {
    try {
        const newAction = await Actions.addAction(req.body);
        res.status(201).json(newAction);
    } catch(error) {
        res.status(500).json(error);
    }
})


module.exports = server;