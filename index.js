const express = require('express');
const helmet = require('helmet');
// const knex = require('knex');
const dishesDb = require('./dishes/dishes-helper.js')

const server = express();

server.use(helmet());
server.use(express.json());

// list all dishes
server.get('/api/dishes', async (req, res) => {
    try {
      const dishes = await dishesDb.find(); 
      res.status(200).json(dishes);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  // list a role by id
  server.get('/api/dishes/:id', async (req, res) => {
    // get the dishes from the database
    try {
      const dish = await dishesDb.findById(req.params.id)
      res.status(200).json(dish);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  const errors = {
    '19': 'Another record with that value exists',
  };

const port = process.env.PORT || 4000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);