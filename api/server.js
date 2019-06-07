const express = require('express');
const helmet = require('helmet');

const Projects = require('../data/projects-model.js');

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

module.exports = server;