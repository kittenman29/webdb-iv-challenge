const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('./routers/dishes-router.js');
const ingredientsRouter = require('./routers/ingredients-router.js');
const recipesRouter = require('./routers/recipes-router.js');


const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

server.use('/api/dishes', dishesRouter);
server.use('/api/ingredients', ingredientsRouter);
server.use('/api/recipes', recipesRouter);


const port = 5000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
