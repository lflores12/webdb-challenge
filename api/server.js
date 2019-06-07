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

server.get('/api/actions', async (req, res) => {
    try {
        const actions = await Actions.getActions();
        res.status(200).json(actions);
    } catch(error) {
        res.status(500).json({ message: "Error retriving actions"})
    }

});

module.exports = server;