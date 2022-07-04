const express = require('express')

const allTodos = [{ nome: 'aaaa', status: false }]
const todosRoutes = express.Router()

// c
todosRoutes.post('/todos', (request, response) => {
  const { name } = request.body
  allTodos.push({ name, status: false })
  return response.status(201).json(allTodos)
})
// r
todosRoutes.get('/todos', (request, response) => {
  return response.status(200).json(allTodos)
})
// u
// d

module.exports = todosRoutes
