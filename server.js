const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./projects/projects-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/projects', ProjectRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "running"});
});

module.exports = server;